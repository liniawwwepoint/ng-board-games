import { User } from './../../models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  currentUser$: Observable<User>;
  currentUserEmail$: Observable<String>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.authService.getAuth().subscribe(auth => {
    // })
    this.currentUser$ = this.authService.currentUser$;
    this.currentUserEmail$ = this.currentUser$.map((currentUser: User) => currentUser.email);
  }
    // if(this.authService.currentUser$ | async) {
    //   this.isLoggedIn = true;
    //   this.loggedInUser = auth.email;
    // } else {
    //   this.isLoggedIn = false;
    // }

  logout() {
    this.authService.logout();
    this.router.navigate([`/login`]);
  }
}
