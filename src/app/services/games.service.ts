import { Game } from './../models/game';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamesService {

  gamesCollection: AngularFirestoreCollection<Game>;
  games: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    // this.gamesCollection = this.afs.collection('games');
    this.games = afs.collection('games').valueChanges();
   }

   getGames(): Observable<Game[]> {
    return this.games;
   }
}
