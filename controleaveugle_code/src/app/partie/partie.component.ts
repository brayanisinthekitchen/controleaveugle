import { Component, OnInit } from '@angular/core';
import { JoueurComponent } from '../joueur/joueur.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
