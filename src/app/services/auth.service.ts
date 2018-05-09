import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { User } from './../models/user';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/empty' 

@Injectable()
export class AuthService {

  usersCollection: AngularFirestoreCollection<User>;
  firebaseAuthService: FirebaseAuth;
  currentUser$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private flashMessage: FlashMessagesService
  ) {
    this.usersCollection = this.afs.collection('users');
    this.firebaseAuthService = this.afAuth.auth;
    this.currentUser$ = this.afAuth.authState.pipe(mergeMap((state) => {
        if(state && state.uid) {
          return this.usersCollection.doc(state.uid).valueChanges();
        } else {
          return Observable.of(null);
        }
      }
    ));
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

  }
}
