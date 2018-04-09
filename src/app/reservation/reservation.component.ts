import { QueryObject } from './../shared/queryObject';
import { ReservationService } from './reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservations = [];
  totalItem = 0;
  queryObject: QueryObject;

  constructor(private _reservationService: ReservationService) { }

  ngOnInit() {
    this.queryObject = {
      isSortAscending: "false",
      page: "1",
      pageSize: "10"
    };

    this.findReservation(this.queryObject);       
  }

  pageChange(page) {
    this.queryObject.page = page;
    this.findReservation(this.queryObject);
  }

  findReservation(queryObject: QueryObject) {
    this._reservationService.getReservation(queryObject)
      .subscribe(data => {
      this.reservations = data.items;
      this.totalItem = data.TotalItem;
    }); 
  }
}
