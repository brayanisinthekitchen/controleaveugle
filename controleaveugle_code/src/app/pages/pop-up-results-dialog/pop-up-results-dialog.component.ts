import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Joueur } from 'src/app/joueur';
import { JOUEURS } from 'src/app/joueurs';
import { JoueursService } from 'src/app/joueurs.service';

@Component({
  selector: 'app-pop-up-results-dialog',
  templateUrl: './pop-up-results-dialog.component.html',
  styleUrls: ['./pop-up-results-dialog.component.scss']
})
export class PopUpResultsDialogComponent implements OnInit{
  joueurs : Joueur[] = [];
  joueursList : any;
  constructor(private joueursService : JoueursService){}
  ngOnInit(): void {
    this.joueursList = this.getJoueurs();
    //console.log(this.getJoueurs());
  }

  getJoueurs(): Joueur[]{
    return this.joueurs = this.joueursService.getJoueurs();
  }



}
