import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Bank} from './bank'

@Injectable()
export class BankService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private bankUrl = 'http://localhost:8080/banks/all'
  private addBankUrl = 'http://localhost:8080/banks/add'
  private deleteBankUrl = 'http://localhost:8080/banks/delete'

  public getBanks(id : string): Promise<Bank[]> {
    return this.http
    .get(this.bankUrl+"/"+id, this.options)
    .toPromise()
    .then(res => res.json() as Bank[])
    .catch(this.handleError);
  }

  public addBank(bank : Bank) : Promise<boolean> {
    return this.http
    .post(this.addBankUrl, JSON.stringify(bank), this.options)
    .toPromise()
    .then(res => res.json() as boolean)
    .catch(this.handleError);
  }

  public deleteBank(bank : Bank) : Promise<boolean> {
    return this.http
    .post(this.deleteBankUrl, JSON.stringify(bank), this.options)
    .toPromise()
    .then(res => res.json() as boolean)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
