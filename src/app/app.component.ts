import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _router: Router) { }
  ngOnInit(): void {
   //let token = localStorage.getItem('token');
   //if (token === null)
      //this._router.navigate(['auth/login']);    
  }
}
