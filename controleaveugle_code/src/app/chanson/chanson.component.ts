import { Component, OnInit } from '@angular/core';
import { Chanson } from '../chanson';
import { ChansonServiceService } from '../chanson-service.service';
@Component({
  selector: 'app-chanson',
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.scss']
})
export class ChansonComponent implements OnInit {
  chansons : Chanson[] = [];
  constructor(private chansonServiceService:ChansonServiceService) { }

  ngOnInit(): void {
    this.chansonServiceService.getPlaylist("https://open.spotify.com/playlists/62aTmrLRUWaYSFGbrw23RJ");
  }


  /*getChanson(param: string): Chanson{
    return this.chansons = this.chansonServiceService.getPlaylist(param);
  }*/
}
