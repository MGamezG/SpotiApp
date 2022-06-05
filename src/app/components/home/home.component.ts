import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  songs:any[]=[];
  artistas:any[]=[];
  constructor(private sptifyService:SpotifyService){//injectar el servicio, para poder ver la informacion que proporciona el servico
    this.sptifyService.getNewReleases()// llamar la funcion get
    .subscribe((data:any)=>{
      console.log(data.albums.items);//espesificar que se requiere de la infromacion e imprimirla en consola
      this.songs=data.albums.items;
      //this.songs=data

    })
  }





}
