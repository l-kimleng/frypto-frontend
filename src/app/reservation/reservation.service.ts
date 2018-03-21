import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ReservationService {
    private _url: string = "http://localhost:50488/api/reservations/";

    constructor(private _http: HttpClient) { }

    getReservation () {      
        let token = 'gZArob3TGziwXTlnMCEteDYiRbYrP2L6meGpWFExM2rE3w9dl2jhcnJaHAIOdxApaynuYMuQIT206-qBAdhKbTAhFrwEizp5xaU4wVWqGWiQpZZEe_CkHd1DE27m-4FWf5eVEFOZbxfkAvlSjpZYxrrTj1mY0BKWgdsFl1JbTLaIE9knj2ShW9FoJ_1xHTzGMfE4ZFX23QDfVCEq8fNxtfulKZUHvTpnfb9BgIuNb0hmpgbRiesBRo_YePav6OfeXgH_VL1SV6gP77O28EG260PO35mj1RpfnDDG7Rctqs_N1Rx_irBfK7BwUoD8at2n01uRO2W9f-cAPq37MoIFMvcHnYt-Ze0RKR3hAXNZUEW2OYaXt3JlwJWG23nK59ZnlyHgAoQAX7lx3L7mNltm1RJEVxaY1YGpDxfumRMggMrQM1Hcq39hlOnJnUj2ph8WwfbcmtxqeTgqDktnyuc6hff2twBvd-QOhsVipM9RwlmujSmEYfgarYKN5jbqaGjn';
        return this._http
            .get(this._url, {
                params: new HttpParams().set('query', ' '),
                headers: new HttpHeaders().set('Authorization', "Bearer " + token)
            })
            .map(res => _.values(res));
    }
}