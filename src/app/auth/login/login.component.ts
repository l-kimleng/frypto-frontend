import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private _authService: AuthService, private _router: Router) { }

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
      this._router.navigate(['/hotel']);
    }, error => {
      alert('login fail');
    });
  }

}
