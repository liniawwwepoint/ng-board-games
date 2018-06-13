import { AddGameFormComponent } from './../add-game-form/add-game-form.component';
import { ModalComponent } from './../modal/modal.component';
import { Game } from './../../models/game';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  @Input('gameItem') game: Game;
  dialogRef: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        component: AddGameFormComponent
      }
    });
  }

}
