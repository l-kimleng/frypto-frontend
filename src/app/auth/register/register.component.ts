import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  
  constructor(private _authServce: AuthService, private _router: Router) { }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  registerUser() {
    this._authServce.registerUser(this.user).subscribe(error => {
      if(!error) {
        this._authServce.login(this.user).subscribe(response => {
          console.log(response);
        });
      }
    });  
  }

}
