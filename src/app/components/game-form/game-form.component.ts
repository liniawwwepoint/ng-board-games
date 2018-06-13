import { ModalContent } from './../../models/modal-content';
import { GamesService } from './../../services/games.service';
import { Game } from './../../models/game';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  myForm: FormGroup;
  @Input() game: Game;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(this.game.name, [Validators.required, Validators.minLength(3)]), 
      description: new FormControl(this.game.description, [Validators.required, Validators.minLength(8)]),
      isAvailable: new FormControl(this.game.isAvailable ? 'checked' : null)
    })
  }

  submit(updatedGame, isValid) {
    if(isValid) {
      this.game.name = updatedGame.name;
      this.game.description = updatedGame.description;

      this.gameService.updateGame(this.game);
      this.submitted.emit(null);
    }
  }
}
