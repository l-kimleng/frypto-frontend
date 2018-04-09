import { QueryObject } from './../shared/queryObject';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { environment } from '../../environments/environment';

@Injectable()
export class ReservationService {
    //private _baseUrl: string = "http://localhost:50488";
    //private _baseUrl: string = "https://frypto.somee.com"; // for production
    private _baseUrl: string = environment.baseUrl; // for production
    constructor(private _http: HttpClient) {}

    getReservation (query: QueryObject) {      
        let token = localStorage.getItem('token');
        return this._http
            .get(`${this._baseUrl}/api/reservations`, {
                params: new HttpParams({
                    fromObject: {                        
                        isSortAscending: query.isSortAscending,
                        page: query.page,
                        pageSize: query.pageSize
                    }
                }),
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
            })
            .map(res => JSON.parse(JSON.stringify(res)));
    }
}