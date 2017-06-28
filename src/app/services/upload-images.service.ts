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

  }


  private saveImage( image: any ) {

    this.db.list(`/${ this.IMAGES_FOLDER }`)
        .push( image );
  }


}
