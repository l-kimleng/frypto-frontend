import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    
    this._route.params.subscribe(params => {
      let userName = params['user_name'];
      this._dataService.changeMessage(userName);
    });    
  }
}
