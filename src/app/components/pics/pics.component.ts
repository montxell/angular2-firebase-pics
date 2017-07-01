import { Component, OnInit } from '@angular/core';

import { UploadImagesService } from '../../services/upload-images.service';

import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styles: []
})
export class PicsComponent implements OnInit {

  images: FirebaseListObservable<any[]>;


  constructor( public _uploadImages: UploadImagesService) {

    this.images = this._uploadImages.lastImagesList( 10 );

  }

  ngOnInit() {
  }

}
