import { Component } from '@angular/core';
import {BankService} from './bank.service'
import {AppComponent} from './app.component'
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {ChangeDetectorRef} from '@angular/core'

import {Bank} from './bank'

@Component({
  selector: 'bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks : Bank[];

  bankName : string;

  constructor(private bankService : BankService) {
    this.getBanks()
  }

  ngOnInit() : void {

  }

  public getBanks() {
    this.bankService.getBanks(localStorage.getItem("loggedUserID")).then(res => {
      console.log(res)
      this.banks = res;
    })
  }

  public addBank() {
    let bankEntity = new Bank();
    bankEntity.name = this.bankName;
    this.bankService.addBank(bankEntity).then(res => {
      if (res) {
        this.getBanks();
      }
    })
  }

  public deleteBank(id : number) {
    let bankEntity = new Bank();
    bankEntity.id = id;
    this.bankService.deleteBank(bankEntity).then(res => {
      if (res) {
        this.getBanks();
      }
    })
  }

  get staticIsAdmin() {
    return localStorage.getItem('isAdmin')
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
