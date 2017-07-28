import { Component } from '@angular/core';


import {OnInit} from '@angular/core'

import {LoginService} from './login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Best bank app evaa';

  static loggedUserID = localStorage.getItem('loggedUserID');

  static isAdmin = Boolean(localStorage.getItem('isAdmin'))

  ngOnInit() {
  }

  public static changeLoggedUser() {
    AppComponent.isAdmin = Boolean(localStorage.getItem('isAdmin'))
    AppComponent.loggedUserID = localStorage.getItem('loggedUserID');
  }

  get staticLoggedUser() {
    return AppComponent.loggedUserID;
  }

  get staticIsAdmin() {
    return localStorage.getItem('isAdmin')
  }

  public logout() {
    localStorage.removeItem('loggedUserID')
    localStorage.removeItem('isAdmin')
    AppComponent.changeLoggedUser()
  }

  constructor(private loginService : LoginService) {

  }



}

$(document).ready(function(){
  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
  });
})
