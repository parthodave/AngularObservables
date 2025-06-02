// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav style="background: #1976d2; color: white; padding: 10px;">
      <a routerLink="/" style="margin-right: 20px; color: white;">🏠 Home</a> <b> | </b>
      <a routerLink="/polling" style="color: white;"> Polling</a> <b> | </b>
      <a routerLink="/searchbooks" style="color: white;">📡 Search Books</a> <b> | </b>
       <a routerLink="/ShowData" style="color: white;">  Show Data </a> <b> | </b>
       <a routerLink="/ReactiveForms" style="color: white;"> Reactive Froms </a>       
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
