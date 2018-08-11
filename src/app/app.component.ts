import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MessagingService } from "app/services/messaging.service";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private msg: MessagingService, private auth: AuthService) {}

  ngOnInit() {
     this.auth.currentUser$
    .filter(user => !!user) // filter null
    .take(1) // take first real user
    .subscribe(user => {
      if (user) {
        this.msg.getPermission(user)
        this.msg.monitorRefresh(user)
        this.msg.receiveMessages()
      }
    })
  }
}
