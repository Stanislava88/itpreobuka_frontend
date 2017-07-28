import { Component } from '@angular/core';

import {AppComponent} from './app.component'
import { OnInit } from '@angular/core';
import{AccountService} from './account.service';
import { Router } from '@angular/router';

import {Client} from './client';
import {Role} from './role'
import {ClientWithPassword} from './clientWithPassword';

import {ClientService} from './client.service'
import {RoleService} from './role.service'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{

  roles : Role[]

  name : string;
  surname : string;
  email : string;
  password1 : string;
  password2 : string;
  role = -1;

  constructor(private clientService : ClientService, private roleService : RoleService, private router : Router){
    this.getRoles();
  }

  public getRoles() {
    this.roleService.getRoles().then(res => {
      console.log(res)
      this.roles = res;
    })
  }

  public addClient() {

    console.log(this.role)

    if (this.password1 != this.password2) {
      return;
    }

    let client = new ClientWithPassword();
    client.name = this.name;
    client.surname = this.surname;
    client.email = this.email;
    client.password = this.password1;
    client.roleID = this.role;

    this.clientService.addClient(client).then(res => {
      if (res) {
        this.router.navigate(['./client']);
      }
    })
  }

  public roleOnChange($event) {
    this.role = $event.target.value;
  }

}
