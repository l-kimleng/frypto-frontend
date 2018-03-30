import { Component, OnInit, isDevMode } from '@angular/core';
import { DataService } from '../shared/data.service';
import { MessageService } from '../auth/message.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string;

  constructor(private _dataService: DataService , private _messageService: MessageService) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(message => this.userName = message.userName);
    
    if(isDevMode()) {      
       // For testing message service
      this._messageService.getPermission();
      this._messageService.receiveMessage();
    }   
  }

}
