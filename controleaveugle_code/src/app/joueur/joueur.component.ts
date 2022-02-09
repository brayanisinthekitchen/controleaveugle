import { Component, OnInit } from '@angular/core';
import { JOUEURS } from '../joueurs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {

  joueurs = JOUEURS;
  constructor() { }

  ngOnInit(): void {
  }

}
