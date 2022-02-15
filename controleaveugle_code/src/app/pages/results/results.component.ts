import { Component, OnInit } from '@angular/core';

import { Joueur } from 'src/app/joueur';
import { JoueursService } from 'src/app/joueurs.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  joueurs : Joueur[] = [];
  trioGagnant: any ;
  joueursList: any;
  constructor(private joueursService: JoueursService) { }

  ngOnInit(): void {
    this.trioGagnant = this.getTrio();
    //console.log(this.getTrio());
    this.joueursList = this.getJoueurs();
    //console.log(this.getJoueurs());
  }


  getTrio(joueurs = this.joueursService.getJoueurs()){
    let listeTriee = joueurs.sort().reverse();
    let trio = [ {points : listeTriee[0].points, nom : listeTriee[0].nom}, {points : listeTriee[1].points, nom : listeTriee[1].nom}, {points : listeTriee[2].points, nom : listeTriee[2].nom} ];
    return trio;
  }

  getJoueurs() : Joueur[]{
    return this.joueurs = this.joueursService.getJoueurs();
  }
}
