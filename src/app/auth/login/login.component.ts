import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private _authService: AuthService, private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  login() {
    this._authService.login(this.user).subscribe(response => {
      localStorage.setItem('token', response[0]);
      let userName = response[3];
      this._dataService.changeMessage(userName);
      this._router.navigate(['/hotel']);
    }, error => {
      alert('login fail');
    });
  }

}
