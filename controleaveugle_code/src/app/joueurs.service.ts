import { Injectable } from '@angular/core';
import { Joueur } from './joueur';
import { JOUEURS } from './joueurs';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  constructor() { }

  getJoueurs():Joueur[]{
    return JOUEURS;
  }

  initScore(){
    JOUEURS.forEach(element => {
      element.points = 0
    });
  }
}
