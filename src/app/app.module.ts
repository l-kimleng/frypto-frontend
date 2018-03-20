import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './reservation/reservation.service';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelComponent,
    PassengerComponent,
    PaymentsComponent,
    ReservationComponent,
    NavbarComponent,
    RegisterComponent,
    AuthComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent,
        children: [
          {
            path: "hotel",
            component: HotelComponent
          },
          {
            path: 'passenger',
            component: PassengerComponent
          },
          {
            path: 'reservation',
            component: ReservationComponent
          },
          {
            path: 'payments',
            component: PaymentsComponent
          }
        ]
      },
      {
        path: "auth",
        component: AuthComponent,
        children: [
          {
            path: "register",
            component: RegisterComponent
          }
        ]
      }      
    ])
  ],
  providers: [ 
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
