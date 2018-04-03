import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Message } from '../../shared/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  private message: Message;
  constructor(private _authService: AuthService, private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.message = {
      userName: '',
      roles: []
    };    
  }

  login() {
    this._authService.login(this.user).subscribe(response => {
      localStorage.setItem('token', response[0]);
      this.message.userName = response[3];
      this.message.roles = response[4].split(",");
      this._dataService.changeMessage(this.message);
      this._router.navigate(['app/hotel']);
    }, err => {
      alert(`Login Fail: ${err.error.error_description}`);
    });
  }
}
