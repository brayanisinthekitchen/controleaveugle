import { Component, OnInit } from '@angular/core';
import { JOUEURS } from '../joueurs';
@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {
  joueurs = JOUEURS;
  constructor() { }

  ngOnInit(): void {
  }

}
