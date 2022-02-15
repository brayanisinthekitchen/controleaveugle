import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChansonServiceService {


  constructor(private http: HttpClient) { }

  getPlaylist(param: string){
      var params:String[] = param.split('/');
      var id = params.pop();
      return this.http.get("https://api.spotify.com/v1/playlist/"+ id);
    }
  }
}
