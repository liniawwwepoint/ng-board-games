import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private flashMessage: FlashMessagesService
  ) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(
          userData => resolve(userData),
          err => this.flashMessage.show(err, {cssClass: 'alert-danger', timeout: 3000}));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);

  }

}
