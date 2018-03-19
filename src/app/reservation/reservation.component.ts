import { ReservationService } from './reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservations = [];
  constructor(private _reservationService: ReservationService) { }

  ngOnInit() {
    this._reservationService.getReservation()
      .subscribe(reservation => {
        this.reservations = reservation;
      });     
  }
}
