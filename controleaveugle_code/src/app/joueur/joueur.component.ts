import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../joueurs.service';
import { Joueur } from '../joueur';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {

  joueurs : Joueur[] = [];
  joueursList: any;

  constructor(private joueursService: JoueursService) { }

  ngOnInit(): void {
    this.joueursList = this.getJoueur();
  }

  getJoueur(): Joueur[]{
    return this.joueurs = this.joueursService.getJoueurs();
  }

}
