import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import{ProfileComponent}from './profile.component';
import{AccountComponent} from './account.component';
import{TransactionComponent} from './transaction.component';
import{PaymentComponent} from './payment.component';
import{ClientComponent} from './client.component';
import {BankComponent} from './bank.component'

const routes : Routes = [
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'register',component: RegisterComponent
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'profile',component: ProfileComponent
  },
  {
    path: 'account',component: AccountComponent
  },
  {
    path: 'transaction',component: TransactionComponent
  },
  {
    path: 'payment',component: PaymentComponent
  },
  {
    path: 'client',component: ClientComponent
  },
  {
    path: 'bank',component: BankComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
