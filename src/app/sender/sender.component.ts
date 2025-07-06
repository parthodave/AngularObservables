import { Component } from '@angular/core';
import { MessageSharingService } from '../message-sharing.service';

@Component({
  selector: 'app-sender',
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
constructor(private sharingService : MessageSharingService){
}

ngOnInit(){
  this.sharingService.SendMessage("Whatsup from Sender..");
}

}
