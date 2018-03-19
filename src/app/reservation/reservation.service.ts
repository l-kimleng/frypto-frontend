import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ReservationService {
    private _url: string = "http://localhost:50488/api/reservations/";

    constructor(private _http: HttpClient) { }

    getReservation () {      
        let token = 'EkEj4WRR4F0uvWfdYDSOkBwFG79G1JRc1SwqPR3vsq2B_Rm8S268SMvEEcrH9DKE1KKDeQNcDtNDthLHGWyRJk9rU5QrpzjiPpDwWMlHKQKssXXqUsamL6DQbIqvQVk2BT84h8MFQnS0tX3A1HQqKyjSHJz4RNtNfB0e2DQHSjxj-aOai2EHHmU9rnHiADDjAStgo4mkf-lzUKmZ9_SdHKQtMokir1FoRT4y9bmDSJt_i3kiTR8dfdLac0QwFwElvF7EFAnZb_c_O1Rak8Ai5i00I2IxN3FUpi0nKBvaPo3mvsBNaBQbUnRpIySJFhegKAOkvYNyAKMcr9EyzQEwX-IjEwttfAY9tOmnyVuXVawnONmuT3rx_vdIcqlmKjILYONGnl-Wrjrpgv0Ijol5nw0flw3GLE-HJpaVJAMws5Z2Pyu9HKW4mq0_TgDlbzPzc2yxNZPo_upCPjUI2akUb5n69-osltysrlFPhek02cqq1TDqD5cr3qEmNUNgMWt8';
        return this._http
            .get(this._url, {
                params: new HttpParams().set('query', ' '),
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
            })
            .map(res => _.values(res));
    }
}