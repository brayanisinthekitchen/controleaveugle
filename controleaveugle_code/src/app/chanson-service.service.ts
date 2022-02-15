import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chanson } from './chanson';
import { eventListeners } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class ChansonServiceService {


  constructor(private http: HttpClient) { }

  getPlaylist(param: string): void{
    //var retour: Chanson[];
    const headers = new HttpHeaders({'Content-Type':'application/json;' , 'Authorization':'Bearer BQBl-WsT53_WTjmOyA-VoPqXZ8IyhnOMnFv430rGY6YH3HU0VytwHI9DevwZRFncST-ihyKD3RSyOcvxxKhVeyVIPeb_XYRx0JIywPe9bAxbnTqd9PuF-haqbUxvmxbLCGRe0gh5eZagby16dlS8T-vLkuHwQ7603ob-a6Dtt7Judhp6'});
    var params:String[] = param.split('/');
    var id = params.pop();
    console.log(id);
    var res = this.http.get("https://api.spotify.com/v1/playlists/"+ id+"/tracks", {headers});
    console.log(res.subscribe());
  }

}

