import { Component, OnInit } from '@angular/core';
import { Chanson } from '../chanson';
import { ChansonServiceService } from '../chanson-service.service';
@Component({
  selector: 'app-chanson',
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.scss']
})
export class ChansonComponent implements OnInit {
  chansons : Chanson;
  constructor() { }

  ngOnInit(): void {
    this.chansons.artiste;
    this.chansons.titre;
  }


  getChanson(param: string): Chanson{
    return this.chansons = ChansonServiceService.getPlaylist(param);
  }
}
