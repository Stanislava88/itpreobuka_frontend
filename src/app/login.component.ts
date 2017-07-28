import { Component } from '@angular/core';
import {LoginService} from './login.service'
import {AppComponent} from './app.component'
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;



  constructor(private loginService : LoginService, private router : Router, private ref:ChangeDetectorRef) {
    console.log("dosao u constructor");
  }

  ngOnInit() : void {

  }

  public login() {
    console.log("Email is: "+this.email);
    console.log("Password is: "+this.password);

    this.loginService.login(this.email,this.password).then(data => {
      console.log(data)
      if (data != -1) {
        localStorage.setItem('loggedUserID', String(data));
        this.loginService.isAdmin(localStorage.getItem('loggedUserID')).then(res => {
          localStorage.setItem('isAdmin', String(res));
          AppComponent.changeLoggedUser()
          this.router.navigate(['./profile']);
        })
      } else {
        (<HTMLInputElement>document.getElementById("email")).classList.add('glowRed');
        (<HTMLInputElement>document.getElementById("password")).classList.add('glowRed');
      }

    });

  }
}
