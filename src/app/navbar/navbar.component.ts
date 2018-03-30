import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _roles: string[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(message => {
      this._roles =  message.roles;      
    });
  }

  isInRoles(roleName: string) {
    return this._roles.indexOf(roleName) > -1;
  }
}
