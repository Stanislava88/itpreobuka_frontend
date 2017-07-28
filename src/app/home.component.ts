import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Best bank app evaa';

  ngOnInit() : void {

  }

}
