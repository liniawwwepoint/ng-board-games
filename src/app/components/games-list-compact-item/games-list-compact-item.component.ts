import { Game } from './../../models/game';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '@components/modal/modal.component';

@Component({
  selector: 'app-games-list-compact-item',
  templateUrl: './games-list-compact-item.component.html',
  styleUrls: ['./games-list-compact-item.component.css']
})
export class GamesListCompactItemComponent implements OnInit {
  @Input() asd: Game;

  constructor(
  public dialog: MatDialog
) { }

openDialog(): void {
  const dialogRef = this.dialog.open(ModalComponent, {
    width: '250px'
  });
}
  ngOnInit() {
  }

}
