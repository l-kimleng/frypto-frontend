import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private _router: Router) {}

    canActivate() {
        let token = localStorage.getItem('token');
        if(token !== null)
            return true;

        this._router.navigate(['auth/login']);
        return false;
    }
}