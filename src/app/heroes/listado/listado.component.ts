import { Component  } from "@angular/core";
//import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  /*constructor() {
    console.log('constructor');
   }
  
  ngOnInit(): void {
    console.log('ngOnInint');
  }*/
  heroes: string [] = ['Batman', 'Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán America'];
  jugadores: string []=['Messi', 'C. Ronaldo', 'Xavi', 'Iniesta', 'Depay','Pirlo', 'Pogba'];
  coloresPrimarios: string []=['Rojo','Verde', 'Azul'];
  heroeBorrado: string = '';
  borrarHeroe(){
    //console.log('borrando...');
    //const heroeborrrado = this.heroes.shift();
    this.heroeBorrado= this.heroes.shift() || '';
    //this.jugadores.shift();
    //this.coloresPrimarios.shift();
  }
  borrarJugador(){
    this.jugadores.shift();
  }
  borrarColores(){
    this.coloresPrimarios.shift();
  }
}
