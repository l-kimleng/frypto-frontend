import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { User } from './user';
import { catchError, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    //private _baseUrl: string = "http://localhost:50488";
    //private _baseUrl: string = "https://frypto.somee.com"; // for production
    private _baseUrl: string = environment.baseUrl;// for production
    
    constructor(private _http: HttpClient) { }

    registerUser (user: User) {
        let token = localStorage.getItem('token');
        return this._http
            .post(`${this._baseUrl}/api/Account/Register`, user, {                
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
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

    logout () {
        let token = localStorage.getItem('token');
        return this._http
            .post(`${this._baseUrl}/api/Account/Logout`, {                
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
            });
    }
}
    