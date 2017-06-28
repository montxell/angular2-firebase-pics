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
    this.fileOn.emit( true );
  }

}
