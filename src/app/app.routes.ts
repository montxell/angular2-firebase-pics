import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from './components/upload/upload.component';
import { PicsComponent } from './components/pics/pics.component';

const APP_ROUTES: Routes = [
  { path: 'pics', component: PicsComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pics' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
