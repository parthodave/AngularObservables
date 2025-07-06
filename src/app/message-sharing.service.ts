import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageSharingService {
 mysubject = new BehaviorSubject<string>("");
 mymesage = this.mysubject.asObservable();


 SendMessage(mymesage: string){
  this.mysubject.next(mymesage);
 }

  constructor() { }
}
