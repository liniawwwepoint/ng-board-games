import { Game } from './../models/game';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamesService {

  gamesCollection: AngularFirestoreCollection<Game>;
  game$: Observable<Game[]>;

  constructor(public afs: AngularFirestore) {
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

}
