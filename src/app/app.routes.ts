import { Routes } from '@angular/router';
import { PollingComponent } from './polling/polling.component';
import { AppComponent } from './app.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { MyDataComponent } from './my-data/my-data.component';
import { OnboardingformComponent } from './onboardingform/onboardingform.component';

export const routes: Routes = [
  { path: 'searchbooks', component: SearchbookComponent },
  { path: 'polling', component: PollingComponent },
  { path: 'ShowData', component: MyDataComponent },
  { path: 'ReactiveForms', component: OnboardingformComponent }, // Route for AppComponent
{ path: '', redirectTo: 'searchbooks', pathMatch: 'full' }
];
