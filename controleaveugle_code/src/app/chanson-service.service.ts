import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chanson } from './chanson';
import { eventListeners } from '@popperjs/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ChansonServiceService {


  constructor(private http: HttpClient) { }




  getPlaylist(param: string): void{
    var retour: any;
    const headers = new HttpHeaders({'Content-Type':'application/json;' , 'Authorization':'Bearer BQBl-WsT53_WTjmOyA-VoPqXZ8IyhnOMnFv430rGY6YH3HU0VytwHI9DevwZRFncST-ihyKD3RSyOcvxxKhVeyVIPeb_XYRx0JIywPe9bAxbnTqd9PuF-haqbUxvmxbLCGRe0gh5eZagby16dlS8T-vLkuHwQ7603ob-a6Dtt7Judhp6'});
    var params:String[] = param.split('/');
    var id = params.pop();
    this.http.get<Config>("https://api.spotify.com/v1/playlists/"+ id +"/tracks", {headers, observe:'response'}).subscribe(data => retour = {
      items : (data as any).items
    });
    console.log(retour);
  }

}

