import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // paises:any[]=[];

  // /**
  //  *
  //  * @param http parametro que debe devolver en el metodo get
  //  */
  // constructor(private http:HttpClient) {//http, permite tener todas las propiedades y metodos que contenga httpclient

  //   console.log('constructor de home')
  //   this.http.get('https://restcountries.com/v3.1/lang/spa') // esto es una peticion get
  //   .subscribe((resp:any)=>{//informacion en bruto que debuelve el servicio
  //     this.paises=resp
  //     console.log(resp);// imprime toda la informacion que contenga la URl en consola
  //   });
  //  }

  songs:any[]=[];
  artistas:any[]=[];
  constructor(private sptifyService:SpotifyService){//injectar el servicio, para poder ver la informacion que proporciona el servico
    this.sptifyService.getNewReleases()// llamar la funcion get
    .subscribe((data:any)=>{
      console.log(data.albums.items);//espesificar que se requiere de la infromacion
      this.songs=data.albums.items;

    })
  }





}
