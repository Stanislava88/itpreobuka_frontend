import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Client} from './client'

@Injectable()
export class ClientService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  clientsUrl = "http://localhost:8080/client/all"
  addClientsUrl = "http://localhost:8080/client/register"

  public getClients(): Promise<Client[]> {
    return this.http
    .get(this.clientsUrl, this.options)
    .toPromise()
    .then(res => res.json() as Client[])
    .catch(this.handleError);
  }

  public addClient(client : Client): Promise<boolean> {
    return this.http
    .post(this.addClientsUrl,JSON.stringify(client), this.options)
    .toPromise()
    .then(res => res.json() as boolean)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
