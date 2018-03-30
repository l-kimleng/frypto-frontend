import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../shared/data.service';
import { Message } from '../../shared/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  private message: Message;
  
  constructor(private _authServce: AuthService, private _router: Router, private _dataService: DataService) { }

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

  registerUser() {
    this._authServce.registerUser(this.user).subscribe(error => {
      if(!error) {
        this._authServce.login(this.user).subscribe(response => {          
          localStorage.setItem('token', response[0]);
          let userName:string = response[3];
          let role = '';
          if(userName.includes('admin')) {
            role = 'CanManageUser';
          }
          this.message.userName = response[3];                   
          this.message.roles = this.message.roles.concat(role);          
          this._dataService.changeMessage(this.message);
          this._router.navigate(['/hotel']);
        });
      }
    });  
  }
}
