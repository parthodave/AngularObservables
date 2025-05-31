import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-polling',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid #ccc; padding: 20px; margin-top: 20px;">
      <h3>📡 Polling Component</h3>
      <button (click)="startPolling()">Start Polling</button>
      <button (click)="stopPolling()" [disabled]="!pollingSubscription">Stop Polling</button>

      <p *ngIf="latestValue !== null">Latest polled value: {{ latestValue }}</p>
    </div>
  `
})
export class PollingComponent implements OnDestroy {
  pollingSubscription: Subscription | null = null;
  latestValue: number | null = null;

  startPolling() {
    if (this.pollingSubscription) return;

    this.pollingSubscription = interval(2000).pipe(
      map(val => {
        console.log('📥 Polled value:', val);
        return val;
      })
    ).subscribe(val => {
      this.latestValue = val;
    });
  }

  stopPolling() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
      this.pollingSubscription = null;
      console.log('🛑 Polling stopped.');
    }
  }

  ngOnDestroy() {
    this.stopPolling(); // prevent memory leaks
  }
}
