
export class FileItem {

  public file: File;
  public fileName: string;
  public url: string = "";
  public isUploading: boolean = false;
  public progress: number = 0;

  constructor( file: File) {
    this.file = file;
    this.fileName = file.name;
  }
  
}
