import { GamesService } from './../../services/games.service';
import { ModalComponent } from './../modal/modal.component';
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
    public dialog: MatDialog,
    private gameService: GamesService
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        component: EditGameComponent,
        payload: this.game
      }
    });
  }

  deleteItem(): void {
    this.gameService.removeGame(this.game);
  }
}
