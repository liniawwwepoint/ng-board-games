import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  myform: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]), 
      description: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  }

}
