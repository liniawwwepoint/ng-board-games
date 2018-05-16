import { Game } from './../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-list-compact-item',
  templateUrl: './games-list-compact-item.component.html',
  styleUrls: ['./games-list-compact-item.component.css']
})
export class GamesListCompactItemComponent implements OnInit {
  @Input('game') game: Game;

  constructor() { }

  ngOnInit() {
  }

}
