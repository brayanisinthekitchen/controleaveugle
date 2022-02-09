import { Component, OnInit } from '@angular/core';
import { JOUEURS } from '../joueurs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss'],
  template: `<input [formControl]="control" placeholder="First"> `
})
export class PartieComponent implements OnInit {
  joueurs = JOUEURS;
  constructor() { }

  ngOnInit(): void {
  }

}
