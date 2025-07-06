import { Routes } from '@angular/router';
import { PollingComponent } from './polling/polling.component';
import { AppComponent } from './app.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { MyDataComponent } from './my-data/my-data.component';
import { OnboardingformComponent } from './onboardingform/onboardingform.component';
import { TestDataComponent } from './test-data/test-data.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

export const routes: Routes = [
  { path: 'searchbooks', component: SearchbookComponent },
  { path: 'polling', component: PollingComponent },
  { path: 'ShowData', component: MyDataComponent },
  {path: 'testdata', component: TestDataComponent},
  { path: 'ReactiveForms', component: OnboardingformComponent }, // Route for AppComponent
  {path: 'customers',component: CustomerListComponent},
  {path: 'sender', component: SenderComponent  },
  { path: 'receiver', component: ReceiverComponent },
{ path: '', redirectTo: 'searchbooks', pathMatch: 'full' }
];
