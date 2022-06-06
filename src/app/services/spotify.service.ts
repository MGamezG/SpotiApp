import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

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
      'Authorization':'Bearer BQA3FJ4wcwqPBNkINMjKOkbSQtE3PJ5jocnAhjBkCsvL6CQc_e7cCenARyqxVjU-2EP5ZvLLouLVOIl0FM0'// si el token caduca, solo generar un get en postman para obtener nuevo token
    });
    return this.http.get(url,{headers});
   }
   /**
    * metodo get para obtener informacion
    * header para proveer autentificacion
    *
    */
   getNewReleases(){
    //  const headers=new HttpHeaders({//esto permite espesificar los header que necesita la app, en este caso son la autorizacion y el token
    //    'Authorization':'Bearer BQCWEYkNvJIjSx0iQFjRwUK5V9QRxFEMnfJqjfoxK81foes2zuuDq6Z7ql-b_K_oerncvCRO9yRngh7XEws'// si el token caduca, solo generar un get en postman para obtener nuevo token
    //  });
      return this.getQuery('browse/new-releases'); //argumento que resive el query
      //.pipe(map(data=>data['albums'].items));
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});//peticion al url
    // .pipe(map (data=>{//es
    //   return data['albums'].items;
    // }));
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
  getArtists(termino:string):Observable<any>{
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`);
    // const headers=new HttpHeaders({
    //   'Authorization':'Bearer BQCWEYkNvJIjSx0iQFjRwUK5V9QRxFEMnfJqjfoxK81foes2zuuDq6Z7ql-b_K_oerncvCRO9yRngh7XEws'
    // });
  //  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
  getArtist(id:string):Observable<any>{
    return this.getQuery(`artists/${id}`);

  }
}
