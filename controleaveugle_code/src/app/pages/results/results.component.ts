import { Component, OnInit } from '@angular/core';
import { JOUEURS } from 'src/app/joueurs';
import { Joueur } from 'src/app/joueur';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpResultsDialogComponent } from '../pop-up-results-dialog/pop-up-results-dialog.component';

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

  /*openDialog() {
    const dialogRef = this.dialog.open(PopUpResultsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/

  getTrio(joueurs = JOUEURS){
    let listeTriee = joueurs.sort().reverse();
    let trio = [ {points : listeTriee[0].points, nom : listeTriee[0].nom}, {points : listeTriee[1].points, nom : listeTriee[1].nom}, {points : listeTriee[2].points, nom : listeTriee[2].nom} ];
    console.log(trio);
    return trio;
  }
}
