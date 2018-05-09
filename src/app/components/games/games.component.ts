import { User } from './../../models/user';
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
export class GamesComponent implements OnInit {

  game$: Observable<Game[]>;
  currentUser: string;
  currentUser$: Observable<User>;

  constructor(
    private gamesService: GamesService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.game$ = this.gamesService.getGames();
    this.currentUser$ = this.authService.currentUser$;
  }

  borrowGame(game: Game) {
    this.gamesService.borrowGame(game, this.currentUser$)
      .subscribe(() => {
        this.flashMessage.show('Gra wypożyczona', {cssClass: 'alert-success', timeout: 3000})
      },
      (err) => {
        this.flashMessage.show(err, {cssClass: 'alert-danger', timeout: 3000})
      })
  }

  returnGame(game: Game) {
    this.gamesService.returnGame(game)
      .then(() => 
        this.flashMessage.show('Gra zwrócona', {cssClass: 'alert-success', timeout: 3000}))
      .catch((err) => {
        this.flashMessage.show(err, {cssClass: 'alert-danger', timeout: 3000})
      });
  }
}
