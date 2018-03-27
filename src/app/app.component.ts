import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './auth/message.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _router: Router, private _messageService: MessageService) { }
  ngOnInit(): void {
    this._router.navigate(['auth/login']);
    // For testing message service
    this._messageService.getPermission();
    this._messageService.receiveMessage();
  }
 
}
