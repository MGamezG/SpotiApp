import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent  {
  @Input()items:any[]=[];

  constructor(private router:Router) {

  }


  showArtist(item:any){
    let artitaId;

    if(item.type==='artist'){
      artitaId=item.id;
    }else{
      artitaId=item.artists[0].id;
    }
    // console.log(artitaId)
    this.router.navigate(['artist',artitaId]);
  }
}
