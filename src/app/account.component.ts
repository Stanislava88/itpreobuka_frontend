import { Component } from '@angular/core';

import {AppComponent} from './app.component'
import { OnInit } from '@angular/core';
import{AccountService} from './account.service';
import { Router } from '@angular/router';

import {Account} from './account';

import {LoginService} from './login.service'

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent{

  accounts : Account[];
  isAdmin : boolean;

  constructor(private accountService: AccountService, private loginService : LoginService){

      this.getAccounts();
  }

  public getAccounts() {
    this.accountService.getAccounts(localStorage.getItem('loggedUserID')).then(res => {
      console.log(res)
      this.accounts = res;
    })
  }

  public onKey(event: any) { // without type info
    var input, filter, table, tr, td, tdList, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    console.log(event)
    for (i = 0; i < tr.length; i++) {
      tdList = tr[i].getElementsByTagName("td")
      for (j=0; j < tdList.length; j++) {
        td = tdList[j];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }

}
