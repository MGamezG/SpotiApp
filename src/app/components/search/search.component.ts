import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  artistas:any[]=[];

  constructor( private SpotifyService:SpotifyService) { }

  /**
   * buscar todas las coincidencias con el artista
   * @param termino
   */
  buscar(termino:string){
    console.log(termino);
    this.SpotifyService.getArtist(termino)
    .subscribe((data:any)=>{
      console.log(data.artists.items);
      this.artistas=data.artists.items;
    });
  }

}
