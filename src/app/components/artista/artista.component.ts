import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  artista:any={};
  loading:boolean;
  topTracks:any [] = [];
  constructor( private activatedRouter:ActivatedRoute,
              private spotifyS:SpotifyService) {
                this.loading=true;


    this.activatedRouter.params.subscribe(params =>{
      this.loading=false;
    console.log(params['id']);
    this.getArtista(params['id']);
    this.getTracks(params['id']);
    });


  }
  getArtista(id:string){
    this.spotifyS.getArtist(id)
    .subscribe(Response=>{
      console.log(Response);
      this.artista=Response;
    });
  }

  getTracks(id:string){
    this.spotifyS.getTopTracks(id)
    .subscribe((topTrack:any)=>{
      console.log(topTrack.tracks);
      this.topTracks=topTrack.tracks;
    });
  }
}
