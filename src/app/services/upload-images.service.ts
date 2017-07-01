import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FileItem } from '../models/file-item';

import * as firebase from 'firebase';


@Injectable()
export class UploadImagesService {

  private IMAGES_FOLDER: string = "img";


  constructor( public db: AngularFireDatabase ) { }


  lastImagesList( imagesNumber: number ): FirebaseListObservable<any[]>  {

    return this.db.list(`/${ this.IMAGES_FOLDER }`, {
      query: {
        limitToLast: imagesNumber
      }
    })

  }


  uploadImagesToFirebase( files: FileItem[] ) {

    console.log( files );

    let storageRef = firebase.storage().ref();

    for ( let item of files ) {

      item.isUploading = true;

      let uploadTask: firebase.storage.UploadTask =
         storageRef.child(`${ this.IMAGES_FOLDER }/${ item.fileName }`).put( item.file );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,

        ( snapshot ) => item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error("Error uploading ", error),
        ( ) => {
          item.url = uploadTask.snapshot.downloadURL;
          item.isUploading = false;
          this.saveImage( { name: item.fileName, url: item.url} );
        }

       )

    }

  }


  private saveImage( image: any ) {

    this.db.list(`/${ this.IMAGES_FOLDER }`)
        .push( image );
  }


}
