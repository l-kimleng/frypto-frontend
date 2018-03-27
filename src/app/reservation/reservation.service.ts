import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ReservationService {
    //private _url: string = "http://localhost:50488/api/reservations/";
    //private _baseUrl: string = "http://frypto.somee.com"; // for production
    private _baseUrl: string = "https://frypto.somee.com"; // for production
    constructor(private _http: HttpClient) { }

    getReservation () {      
        let token = localStorage.getItem('token');
        return this._http
            .get(`${this._baseUrl}/api/reservations`, {
                params: new HttpParams().set('query', ' '),
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
            })
            .map(res => _.values(res));
    }
}