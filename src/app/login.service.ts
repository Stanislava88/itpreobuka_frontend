import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService{

  private headers;
  private options;

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private loginUrl = 'http://localhost:8080/client/login'
  private isAdminUrl = 'http://localhost:8080/client/isadmin'

  public login(email:string, password:string): Promise<number> {
    return this.http
    .post(this.loginUrl, JSON.stringify({email: email, password : password}), this.options)
    .toPromise()
    .then(res => res.json() as number)
    .catch(this.handleError);
  }

  public isAdmin(id : string): Promise<boolean> {
    return this.http
    .get(this.isAdminUrl+'/'+id, this.options)
    .toPromise()
    .then(res => res.json() as boolean)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
