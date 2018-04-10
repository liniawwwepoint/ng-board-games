import { Game } from './../models/game';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class GamesService {

  gamesCollection: AngularFirestoreCollection<Game>;
  game$: Observable<Game[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.gamesCollection = this.afs.collection('games');
  }
  
   getGames(): Observable<Game[]> {
   // get games with the id
   this.game$ = this.gamesCollection.snapshotChanges()
     .map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Game;
         data.id = action.payload.doc.id;
         return data;
       });
     });
   return this.game$;
  }

  borrowGame(game: Game, borrower: string) {
    return new Promise((resolve, reject) => 
      this.gamesCollection.doc(game.id).update({
        isAvailable: false,
        borrower: borrower,
        borrowDate: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => resolve(), err => reject(err)
    ));
  }

  returnGame(game: Game) {
    return new Promise((resolve, reject) => 
      this.gamesCollection.doc(game.id).update({isAvailable: true})
        .then(() => resolve(), err => reject(err)
      )
    );
  }
}
