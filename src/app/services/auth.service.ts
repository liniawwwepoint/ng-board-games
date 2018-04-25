import { User } from './../models/user';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  usersCollection: AngularFirestoreCollection<User>;
  firebaseAuthService: FirebaseAuth;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private flashMessage: FlashMessagesService
  ) {
    this.usersCollection = this.afs.collection('users');
    this.firebaseAuthService = this.afAuth.auth;
    console.log(this.afAuth.auth);
  }

  login(email: string, password: string) {
    return this.firebaseAuthService.signInWithEmailAndPassword(email, password)
                                   .catch(err => this.handleError(err));
  }

  register(email: string, password: string) {
    return this.firebaseAuthService.createUserWithEmailAndPassword(email, password)
                           .then(userData => this.createUserDocument(userData))
                           .catch(err => this.handleError(err));
  }

  createUserDocument({email, uid}) {
    let user: User = {
        email: email,
        roles: {
          user: true,
          admin: false
        }
      }
      return this.usersCollection.doc(uid)
                                 .set(user);
  }

  handleError(err) {
    this.flashMessage.show(err, {cssClass: 'alert-danger', timeout: 3000})
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
}
