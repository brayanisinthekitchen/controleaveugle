import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { reduce } from 'rxjs';
import { PopUpResultsDialogComponent } from '../pop-up-results-dialog/pop-up-results-dialog.component';

@Component({
  selector: 'app-pop-up-button',
  templateUrl: './pop-up-button.component.html',
  styleUrls: ['./pop-up-button.component.scss']
})
export class PopUpButtonComponent{


  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(PopUpResultsDialogComponent,{
      width : "250px",
      panelClass : "container_dialog",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
