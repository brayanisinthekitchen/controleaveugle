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
  constructor() { }

  ngOnInit(): void {
    this.getTrio(this.joueurs);
  }

  getTrio(joueurs = JOUEURS){
    let trio = [];
    let listeTriee = joueurs.sort();
    console.log(listeTriee);
  }
}
