import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { User } from './user';

@Injectable()
export class AuthService {
    private _baseUrl: string = "http://localhost:50488";
    
    constructor(private _http: HttpClient) { }

    registerUser (user: User) {
        return this._http
            .post(`${this._baseUrl}/api/Account/Register`, user, {                                
                headers: new HttpHeaders().set('Content-Type', "application/json")
            })
            .map(res => _.values(res));
    }

}

    