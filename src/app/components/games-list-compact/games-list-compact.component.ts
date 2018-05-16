import { GamesListCompactItemComponent } from './../games-list-compact-item/games-list-compact-item.component';
import { GamesService } from './../../services/games.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Game } from './../../models/game';


@Component({
  selector: 'app-games-list-compact',
  templateUrl: './games-list-compact.component.html',
  styleUrls: ['./games-list-compact.component.css']
})
export class GamesListCompactComponent implements OnInit {

  game$: Observable<Game[]>;
  @ViewChild(GamesListCompactItemComponent) gameViewChild: GamesListCompactItemComponent; 

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.game$ = this.gamesService.getGames();
  }

}
