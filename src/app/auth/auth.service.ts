import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { User } from './user';
import { catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
    private _baseUrl: string = "http://localhost:50488";
    
    constructor(private _http: HttpClient) { }

    registerUser (user: User) {
        return this._http
            .post(`${this._baseUrl}/api/Account/Register`, user, {                                
                headers: new HttpHeaders().set('Content-Type', "application/json")
            });
    }

    login (user: User) {        
        let data = `grant_type=password&username=${user.email}&password=${user.password}`;
        return this._http
            .post(`${this._baseUrl}/Token`, data, {                                
                headers: new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded")
            })
            .map(res => _.values(res));
    }
}

    