import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

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
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
    };
  }

  registerUser() {
    this._authServce.registerUser(this.user).subscribe(res => {
      console.log(res);
      if(res.ok == false) this._router.navigate['hotel'];
    });  
  }

}
