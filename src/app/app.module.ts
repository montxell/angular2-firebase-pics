import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { APP_ROUTING } from './app.routes';

import { UploadImagesService } from './services/upload-images.service';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { PicsComponent } from './components/pics/pics.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    PicsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    UploadImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
