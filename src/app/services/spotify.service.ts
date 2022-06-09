import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // tracks:any[]=[];

  constructor( private http:HttpClient) {
    console.log('spotify service listo');
   }

   /**
    * centralizar la peticion
    * @param quiery
    * @returns
    */
   getQuery(quiery:string){
     const url=`https://api.spotify.com/v1/${quiery}`;
     const headers=new HttpHeaders({//esto permite espesificar los header que necesita la app, en este caso son la autorizacion y el token
      'Authorization':'Bearer BQAxwAgr_TpwQ9mn-Pyx9YHw6TlHUeRXa0LF74iWeqys-ghOhRas2Mwcoxkk0b-6w-GyuhxojuqGgn6tJwoUQSVW0RU0Ji93iy5KgSNI8LZUA-yZ3i6z'// si el token caduca, solo generar un get en postman para obtener nuevo token
    });
    return this.http.get(url,{headers});
   }
   /**
    * metodo get para obtener informacion
    * header para proveer autentificacion
    *
    */
   getNewReleases(){
      return this.getQuery('browse/new-releases'); //argumento que resive el query

  }

  /**
   *regresa una lista de artistas
   * @param termino artista
   * @returns obesrvable<any>
   */
  getArtists(termino:string):Observable<any>{
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`);

  }
  getArtist(id:string):Observable<any>{
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=US`);
    // .pipe(map(data=>data['tracks']));
  }
}
