import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import {Transaction} from './transaction'

import {TransactionReceive} from './transactionReceive'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private transactionUrl = 'http://localhost:8080/transactions'
  private otherTransactionUrl = 'http://localhost:8080/transactions/others'
  private addTransactionUrl = 'http://localhost:8080/transactions/add'


  public getTransactions(id : string): Promise<TransactionReceive[]> {
    return this.http
    .get(this.transactionUrl+"/"+id, this.options)
    .toPromise()
    .then(res => res.json() as TransactionReceive[])
    .catch(this.handleError);
  }

  public getOtherTransactions(id : string): Promise<TransactionReceive[]> {
    return this.http
    .get(this.otherTransactionUrl+"/"+id, this.options)
    .toPromise()
    .then(res => res.json() as TransactionReceive[])
    .catch(this.handleError);
  }

  public addTransaction(transaction : Transaction) : Promise<boolean> {
    return this.http
    .post(this.addTransactionUrl, JSON.stringify(transaction), this.options)
    .toPromise()
    .then(res => res.json() as number)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
