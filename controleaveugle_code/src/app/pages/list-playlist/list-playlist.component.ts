import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/playlist';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.scss']
})
export class ListPlaylistComponent implements OnInit {
  playlists : Playlist[] = [{id:1,nom:'old town road', lien:'le lien'}, {id : 2, nom : 'L\'histoire de la vie', lien: 'le lien²'}];
  constructor() { }

  ngOnInit(): void {
  }

}
