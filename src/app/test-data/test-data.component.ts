import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-data',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './test-data.component.html',
  styleUrl: './test-data.component.css'
})
export class TestDataComponent {
listData: {name: string, email : string}[] = [];
myvar = output();

constructor(private http : HttpClient){
  
}

  ngOnInit(){

    const myObservable : Observable<any[]> = this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");

    myObservable.subscribe(
       data => {
        this.listData = data;
       }
    );

}
}
