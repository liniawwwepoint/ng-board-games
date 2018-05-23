import { EditGameComponent } from './../edit-game/edit-game.component';
import { Game } from './../../models/game';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-games-list-compact-item',
  templateUrl: './games-list-compact-item.component.html',
  styleUrls: ['./games-list-compact-item.component.css']
})
export class GamesListCompactItemComponent implements OnInit {

  @Input('gameItem') game: Game;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(EditGameComponent, {
      width: '400px'
    });
  }
}
