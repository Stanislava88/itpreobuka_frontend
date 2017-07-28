import { Component } from '@angular/core';

import {ClientService} from './client.service'
import {Client} from './client'

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent{

  clients : Client[];

  constructor(private clientService : ClientService) {
    this.getClients()
  }

  public getClients() {
    this.clientService.getClients().then(res => {
      console.log(res)
      this.clients = res;
    })
  }

  public onKey(event: any) { // without type info
    var input, filter, table, tr, td, tdList, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    console.log(event)
    for (i = 0; i < tr.length; i++) {
      tdList = tr[i].getElementsByTagName("td")
      for (j=0; j < tdList.length; j++) {
        td = tdList[j];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }

}
