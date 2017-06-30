import { Component, OnInit } from '@angular/core';

import { FileItem } from '../../models/file-item';

import { UploadImagesService } from '../../services/upload-images.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent implements OnInit {

  isOnDropZone: boolean = false;
  isAllowedToUpload: boolean = true;

  files: FileItem[] = [];


  constructor( public _uploadImages: UploadImagesService ) { }

  ngOnInit() {
  }


  fileOnDropZone( event: boolean ) {
      this.isOnDropZone = event;
  }


  uploadImagesToFirebase() {
    this.isAllowedToUpload = false;
    this._uploadImages.uploadImagesToFirebase( this.files );
  }


  cleanFiles() {
    this.files = [];
    this.isAllowedToUpload = true;
  }

}
