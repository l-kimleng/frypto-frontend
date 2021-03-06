import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

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
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { environment } from '../environments/environment';
import { MessageService } from './auth/message.service';
import { DataService } from './shared/data.service';
import { AuthGuardService } from './auth/auth-guard.service';

firebase.initializeApp(environment.firebase);

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
    AuthComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),    
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'auth/login',
        pathMatch: 'full'
      },
      {
        path: "app",
        component: HomeComponent,
        children: [
          {
            path: "hotel",
            component: HotelComponent
          },
          {
            path: 'passenger',
            component: PassengerComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'reservation',
            component: ReservationComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'payments',
            component: PaymentsComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'register',
            component: RegisterComponent,
            canActivate: [ AuthGuardService ]
          }
        ]
      },
      {
        path: "auth",
        component: AuthComponent,
        children: [
          {
            path: "register",
            component: RegisterComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: "login",
            component: LoginComponent
          }
        ]
      }      
    ], { useHash: true })
  ],
  providers: [ 
    ReservationService,
    AuthService,
    AuthGuardService,
    MessageService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
