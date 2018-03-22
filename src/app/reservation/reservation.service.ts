import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ReservationService {
    private _url: string = "http://localhost:50488/api/reservations/";

    constructor(private _http: HttpClient) { }

    getReservation () {      
        let token = localStorage.getItem('token');
        return this._http
            .get(this._url, {
                params: new HttpParams().set('query', ' '),
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
            })
            .map(res => _.values(res));
    }
}