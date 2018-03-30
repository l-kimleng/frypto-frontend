import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(message => this.userName = message.userName);
  }

}
