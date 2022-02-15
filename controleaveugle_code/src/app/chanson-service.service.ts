import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chanson } from './chanson';

@Injectable({
  providedIn: 'root'
})
export class ChansonServiceService {


  constructor(private http: HttpClient) { }

  getPlaylist(param: string): void{
    //var retour: Chanson[];
    const headers = new HttpHeaders({'Content-Type':'application/json;' , 'Authorization':'Bearer BQD-kYWf07qF7uYSC8TPAbw22aY6IyHYua9UHmigjAvKVucjxcWzzvRhYsk0vIr_Q2QpOJ8YbCecENCrbGsuC3k9EPBmjvB6wF_wC-NLQ5hMIWmBF0e8moed6Vm3jL2X5hd0FBVQPwIaLYGE8UZkR8d8JFXzUlyUyXxGh5MWD4kSmPXP'});
    var params:String[] = param.split('/');
    var id = params.pop();
    var res = this.http.get("https://api.spotify.com/v1/playlists/"+ id, {headers});
    console.dir(res);
  }
}

