import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Account} from './account'

@Injectable()
export class AccountService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private accountUrl = 'http://localhost:8080/accounts'
  private allAccountUrl = 'http://localhost:8080/accounts/all'
  private otherAccountUrl = 'http://localhost:8080/accounts/others'

  public getAllAccounts(): Promise<Account[]> {
    return this.http
    .get(this.allAccountUrl, this.options)
    .toPromise()
    .then(res => res.json() as Account[])
    .catch(this.handleError);
  }

  public getAccounts(id : string): Promise<Account[]> {
    return this.http
    .get(this.accountUrl+"/"+id, this.options)
    .toPromise()
    .then(res => res.json() as Account[])
    .catch(this.handleError);
  }

  public getOtherAccounts(id : string): Promise<Account[]> {
    return this.http
    .get(this.otherAccountUrl+"/"+id, this.options)
    .toPromise()
    .then(res => res.json() as Account[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
