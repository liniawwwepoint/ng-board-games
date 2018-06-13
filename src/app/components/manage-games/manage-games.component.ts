import { AddGameComponent } from './../add-game/add-game.component';
import { GamesListCompactComponent } from './../games-list-compact/games-list-compact.component';
import { Component, OnInit } from '@angular/core';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-manage-games',
  templateUrl: './manage-games.component.html',
  styleUrls: ['./manage-games.component.css']
})
export class ManageGamesComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
