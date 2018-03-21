import { Component, OnInit } from '@angular/core';
import { CLIENTS } from './../../mocks/client.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    clients = CLIENTS;
    
  constructor() { }

  ngOnInit() {
  }

}
