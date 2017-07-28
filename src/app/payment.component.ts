import { Component } from '@angular/core';
import {AppComponent} from './app.component'
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AccountService} from './account.service';
import {TransactionService} from './transaction.service';
import {CurrencyService} from './currency.service'

import {Transaction} from './transaction';
import {Account} from './account'
import {Currency} from './currency'



@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{

  myAccounts : Account[]
  otherAccounts : Account[]
  currencies : Currency[];

  constructor (private transactionService : TransactionService, private accountService : AccountService, private currencyService : CurrencyService) {
    this.getMyTransactions();
    this.getOtherTransactions();
    this.getCurrencies();
  }

  public getMyTransactions() {
    this.accountService.getAccounts(localStorage.getItem("loggedUserID")).then(res => {
      console.log(res)
      this.myAccounts = res;
    })
  }

  public getOtherTransactions() {
    this.accountService.getAllAccounts().then(res => {
      console.log(res)
      this.otherAccounts = res;
    })
  }

  public getCurrencies() {
    this.currencyService.getCurrencies().then(res => {
      console.log(res)
      this.currencies = res;
    })
  }

  ngOnInit() : void {

  }


  public myAccOnChange($event) {
      console.log($event.target.value);
      this.senderAccount = $event.target.value
  }

  public otherAccOnChange($event) {
      console.log($event.target.value);
      this.receiverAccount = $event.target.value
  }

  public currencyOnChange($event) {
    this.currency = $event.target.value
  }



  sender : string;
  reason : string;
  receiver : string;

  id : string;
  currency : string;
  amount : string;

  senderAccount : string;
  senderModel : string;
  senderCall : string;

  receiverAccount : string;
  receiverModel : string;
  receiverCall : string;

  public sendTransaction() {
    let transaction = new Transaction();

    transaction.sender = this.sender;
    transaction.reason = this.reason;
    transaction.receiver = this.receiver;

    transaction.id = this.id;
    transaction.currency = this.currency;
    transaction.amount = this.amount;

    console.log("Amount: "+this.amount)

    transaction.senderAccount = this.senderAccount;

    transaction.receiverAccount= this.receiverAccount;

    this.transactionService.addTransaction(transaction).then(res => {
      console.log(res)
    });
  }

}
