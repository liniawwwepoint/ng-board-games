import { ModalContent } from './../../models/modal-content';
import { GamesService } from './../../services/games.service';
import { Game } from './../../models/game';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent implements OnInit {

  myForm: FormGroup;
  dialogRef: any;

  constructor(private gameService: GamesService) { 
    this.myForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]), 
      description: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      isAvailable: new FormControl('checked')
    })
  }

  ngOnInit() {
  }

  submit(newGame: Game, isValid: boolean) {
    if(isValid) {
      this.gameService.addGame(newGame);
      this.closePopup();
    }
  }

  closePopup() {
    this.dialogRef.close();
  }

}
