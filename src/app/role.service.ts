import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Account} from './account'
import {Role} from './role'

@Injectable()
export class RoleService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private allRolesUrl = 'http://localhost:8080/role/all'

  public getRoles() : Promise<Role[]> {
    return this.http
    .get(this.allRolesUrl, this.options)
    .toPromise()
    .then(res => res.json() as Role[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
