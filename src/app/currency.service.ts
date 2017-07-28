import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Currency} from './currency'

import {Client} from './client'

@Injectable()
export class CurrencyService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  currencyUrl = "http://localhost:8080/currency/all"

  public getCurrencies() : Promise<Currency[]> {
    return this.http
    .get(this.currencyUrl, this.options)
    .toPromise()
    .then(res => res.json() as Currency[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
