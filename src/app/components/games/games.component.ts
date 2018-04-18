import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs/Observable';
import { Game } from './../../models/game';
import { GamesService } from './../../services/games.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, OnDestroy {

  game$: Observable<Game[]>;
  borrower: string;
  subscription: any;

  constructor(
    private gamesService: GamesService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.game$ = this.gamesService.getGames();
    this.subscription = this.authService.getAuth().subscribe(auth => {
        this.borrower = auth.email;
    })
  }

  borrowGame(game: Game) {
    this.gamesService.borrowGame(game, this.borrower)
      .then(() => 
        this.flashMessage.show('Gra wypożyczona', {cssClass: 'alert-success', timeout: 3000}))
      .catch((err) => {
        this.flashMessage.show(err, {cssClass: 'alert-danger', timeout: 3000})
      });
  }

  returnGame(game: Game) {
    this.gamesService.returnGame(game)
      .then(() => 
        this.flashMessage.show('Gra zwrócona', {cssClass: 'alert-success', timeout: 3000}))
      .catch((err) => {
        this.flashMessage.show(err, {cssClass: 'alert-danger', timeout: 3000})
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
