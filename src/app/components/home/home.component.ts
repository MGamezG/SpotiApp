import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paises:any[]=[];

  /**
   *
   * @param http parametro que debe devolver en el metodo get
   */
  constructor(private http:HttpClient) {//http, permite tener todas las propiedades y metodos que contenga httpclient

    console.log('constructor de home')
    this.http.get('https://restcountries.com/v3.1/lang/spa') // esto es una peticion get
    .subscribe((resp:any)=>{//informacion en bruto que debuelve el servicio
      this.paises=resp
      console.log(resp);// imprime toda la informacion que contenga la URl en consola
    });
   }

  ngOnInit(): void {
  }

}
