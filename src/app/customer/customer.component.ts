// customer-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  template: `
    <div style="border:1px solid gray; padding:10px; margin:5px;">
      <p><strong>{{ customer.name }}</strong></p>
      <button (click)="select()">Select</button>
    </div>
  `
})
export class CustomerComponent {
  @Input() customer!: { id: number; name: string };
  @Output() selected = new EventEmitter<string>();

  select() {
    this.selected.emit(this.customer.name);
  }
}
