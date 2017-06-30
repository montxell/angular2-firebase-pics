import { Directive, EventEmitter, ElementRef,
         HostListener, Input, Output } from '@angular/core';

import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() fileOn: EventEmitter<any> = new EventEmitter();


  constructor( public element: ElementRef ) { }


  @HostListener('dragenter', ['$event'])
  public onDragEnter( event: any ) {
    this.fileOn.emit( true );
  }


  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.fileOn.emit( false );
  }


  @HostListener('dragover', ['$event'])
  public onDragOver( event: any ) {

    let transfer = this._getTransfer(event);
    transfer.dropEffect = "copy";

    this._preventAndStop(event);

    this.fileOn.emit( true );
  }


  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {

      let transfer = this._getTransfer(event);

      if ( !transfer ) {
        return;
      }

      this._addFiles( transfer.files );

      this._preventAndStop(event);

  }



  private _getTransfer( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }


  private _addFiles( filesList: FileList ) {
    console.log( filesList );
  }


  private _preventAndStop( event: any ) {
    event.preventDefault();
    event.stopPropagation();
  }


  private _fileCanBeUploaded( file: File ) {

    if ( !this._fileAlreadyDropped( file.name ) && this._isImage( file.type) ) {
      return true;
    }

    return false;
  }



  private _fileAlreadyDropped( fileName: string ): boolean {

    for (let i in this.files ) {

      let registry = this.files[i];

      if ( registry.file.name === fileName ) {
        console.log("This file already exists in the list: " + fileName );
        return true;
      }
    }
    return false;
  }


  private _isImage( fileType: string ): boolean {

    return ( fileType == "" || fileType == undefined ) ? false : fileType.startsWith("image");

  }

}
