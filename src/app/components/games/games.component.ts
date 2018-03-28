import { Observable } from 'rxjs/Observable';
import { Game } from './../../models/game';
import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    // this.gamesService.getGames().subscribe(games => {
    //   this.games = games;
    // });
    // this.gamesService.getGames().subscribe(games => {
      this.games = this.gamesService.getGames();
    // });
  }

}
