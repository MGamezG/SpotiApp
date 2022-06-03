import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
       'Authorization':'Bearer BQA7lhvoYmt6TF9_1hXuTqo62kQ0ONqrHR5BZMjtFr2kv20iNGai3oUBJeKkGGe-ycqOMf5Sm10-HJH9m68'
     });
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})//peticion al url
    //en este caso pide un token, por lo que es necesario proveer headers
    .subscribe(data=>{
      console.log(data);// imprime la infromacion del servicio
    });
  }
}
