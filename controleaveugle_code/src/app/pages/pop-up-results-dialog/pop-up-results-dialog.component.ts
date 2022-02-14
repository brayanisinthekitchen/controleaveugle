import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { JOUEURS } from 'src/app/joueurs';

@Component({
  selector: 'app-pop-up-results-dialog',
  templateUrl: './pop-up-results-dialog.component.html',
  styleUrls: ['./pop-up-results-dialog.component.scss']
})
export class PopUpResultsDialogComponent implements OnInit{
  joueurs = JOUEURS;

  constructor(){}
  ngOnInit(): void {
  }



}
