import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  artista:any;
  loading:boolean;
  constructor( private activatedRouter:ActivatedRoute,
              private spotifyS:SpotifyService) {
                this.loading=true;
    this.activatedRouter.params.subscribe(params =>{
      this.loading=false;
    console.log(params['id']);
    this.getArtista(params['id']);
    });
  }
  getArtista(id:string){
    this.spotifyS.getArtist(id)
    .subscribe(Response=>{
      console.log(Response);
      this.artista=Response;
    });
  }
}
