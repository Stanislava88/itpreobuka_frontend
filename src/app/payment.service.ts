import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaymentService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private paymentUrl = 'http://localhost:8080/payment'

  public getPayments(id : number): Promise<number> {
    return this.http
    .post(this.paymentUrl, JSON.stringify({}), this.options)
    .toPromise()
    .then(res => res.json() as number)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
