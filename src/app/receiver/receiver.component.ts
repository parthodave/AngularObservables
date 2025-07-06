import { Component } from '@angular/core';
import { MessageSharingService } from '../message-sharing.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
receivedMsg! : string;
  constructor(private sharingService : MessageSharingService){

  }

  ngOnInit(){
    this.sharingService.mymesage.subscribe(
      mymsg => {
        this.receivedMsg = mymsg;
      }
    );
  }

}
