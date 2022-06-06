import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  constructor( private activatedRouter:ActivatedRoute) {
    this.activatedRouter.params.subscribe(params =>{
    console.log(params['id']);
    })
  }



}
