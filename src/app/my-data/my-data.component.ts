import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-data',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.css'
})
export class MyDataComponent {
users: any[] = [];
  posts: any[] = [];
  comments: any[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private dataService: DataService) {}

  fetchData() {
    debugger;
    // Subscribe to all three API calls
    const userSub = this.dataService.getUsers().subscribe(data => this.users = data);
    const postSub = this.dataService.getPosts().subscribe(data => this.posts = data);
    const commentSub = this.dataService.getComments().subscribe(data => this.comments = data);

    // Track subscriptions
    this.subscriptions.push(userSub, postSub, commentSub);
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
