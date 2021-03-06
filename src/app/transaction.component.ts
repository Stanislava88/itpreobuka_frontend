import { Component } from '@angular/core';

import {AppComponent} from './app.component'
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {TransactionService} from './transaction.service'

import {TransactionReceive} from './transactionReceive'

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent{

    transactions : TransactionReceive[];

    constructor(private transactionService : TransactionService) {
      this.getTransactions()
    }

    public getTransactions() {
      this.transactionService.getTransactions(localStorage.getItem('loggedUserID')).then(res => {
        console.log(res)
        this.transactions = res;
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
