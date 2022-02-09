import { Component, OnInit } from '@angular/core';
import { JOUEURS } from 'src/app/joueurs';
import { Joueur } from 'src/app/joueur';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  joueurs = JOUEURS;
  trioGagnant: any ;
  constructor() { }

  ngOnInit(): void {
    this.trioGagnant = this.getTrio(this.joueurs);
  }

  getTrio(joueurs = JOUEURS){
    let listeTriee = joueurs.sort().reverse();
    let trio = [ {points : listeTriee[0].points, nom : listeTriee[0].nom}, {points : listeTriee[1].points, nom : listeTriee[1].nom}, {points : listeTriee[2].points, nom : listeTriee[2].nom} ];
    console.log(trio);
    return trio;
  }
}
