import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log('spotify service listo');
   }
   /**
    * metodo get para obtener informacion
    * header para proveer autentificacion
    *
    */
   getNewReleases(){
     const headers=new HttpHeaders({//esto permite espesificar los header que necesita la app, en este caso son la autorizacion y el token
       'Authorization':'Bearer BQCWEYkNvJIjSx0iQFjRwUK5V9QRxFEMnfJqjfoxK81foes2zuuDq6Z7ql-b_K_oerncvCRO9yRngh7XEws'// si el token caduca, solo generar un get en postman para obtener nuevo token
     });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});//peticion al url
    //en este caso pide un token, por lo que es necesario proveer headers
    // .subscribe(data=>{
    //   console.log(data);// imprime la infromacion del servicio
    // });
  }

  /**
   *regresa una lista de artistas
   * @param termino artista
   * @returns obesrvable<any>
   */
  getArtist(termino:string):Observable<any>{
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQCWEYkNvJIjSx0iQFjRwUK5V9QRxFEMnfJqjfoxK81foes2zuuDq6Z7ql-b_K_oerncvCRO9yRngh7XEws'
    });
   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}
