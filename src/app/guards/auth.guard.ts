import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  
  canActivate(): Observable<boolean> {
    return this.authService.currentUser$.map(user => {
      if(!user) {
        this.redirectToLogin();
        return false;
      } else {
        return true;
      }
    })
  };

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}

