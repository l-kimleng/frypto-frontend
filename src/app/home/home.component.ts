import { AuthService } from './../auth/auth.service';
import { Component, OnInit, isDevMode } from '@angular/core';
import { DataService } from '../shared/data.service';
import { MessageService } from '../auth/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string;

  constructor(private _dataService: DataService , private _messageService: MessageService,
    private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(message => {
      if(message)
        this.userName = message.userName;
    });
    
    if(isDevMode()) {      
       // For testing message service
      this._messageService.getPermission();
      this._messageService.receiveMessage();
    }   
  }

  logout() {
    this._authService.logout().
      subscribe(res => {
        localStorage.removeItem('token');
        this._router.navigate(['auth/login']);
      });
  }

}
