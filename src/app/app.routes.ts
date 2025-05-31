import { Routes } from '@angular/router';
import { PollingComponent } from './polling/polling.component';
import { AppComponent } from './app.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

export const routes: Routes = [
  { path: 'searchbooks', component: SearchbookComponent },
  { path: 'polling', component: PollingComponent },
   { path: '', component: AppComponent } // Default route
];
