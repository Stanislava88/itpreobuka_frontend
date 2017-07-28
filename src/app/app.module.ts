import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import{ProfileComponent} from './profile.component';
import{AccountComponent} from './account.component';
import{TransactionComponent} from './transaction.component';
import{PaymentComponent} from './payment.component';
import { AppRoutingModule } from './app-routing.module';
import{ClientComponent} from './client.component';
import {BankComponent} from './bank.component'
import {LoginService} from './login.service'
import {TransactionService} from './transaction.service'
import {AccountService} from './account.service'
import {ClientService} from './client.service'
import {BankService} from './bank.service'
import {CurrencyService} from './currency.service'
import {RoleService} from './role.service'
import {RegisterComponent} from './register.component'

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AccountComponent,
    TransactionComponent,
    PaymentComponent,
    ClientComponent,
    BankComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    { provide: LoginService, useClass: LoginService},
    { provide: TransactionService, useClass: TransactionService},
    { provide: AccountService, useClass: AccountService},
    { provide: ClientService, useClass: ClientService},
    { provide: BankService, useClass: BankService},
    { provide: CurrencyService, useClass: CurrencyService},
    { provide: RoleService, useClass: RoleService},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
