// app.component.ts
import { Component, signal } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerComponent, CommonModule],
  template: `
    <h2>Customer List</h2>
    <app-customer-card
      *ngFor="let c of customers"
      [customer]="c"
      (selected)="onCustomerSelected($event)">
    </app-customer-card>

    <p *ngIf="selectedName()">Selected: {{ selectedName() }}</p>
  `
})
export class CustomerListComponent {
  customers = [
    { id: 1, name: 'Anjali Mehta' },
    { id: 2, name: 'Rajesh Kumar' },
    { id: 3, name: 'Fatima Sheikh' }
  ];

  selectedName = signal<string | null>(null);

  onCustomerSelected(name: string) {
    this.selectedName.set(name);
  }
}
