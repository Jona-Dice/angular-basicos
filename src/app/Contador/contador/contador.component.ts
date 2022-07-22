import { Component } from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

    <button (click)="acumular(+1) "> + </button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-1) "> - </button>
    <br>

    <h1>La base es: <button (click)="contador(suma) "> + </button> <strong>{{base}}</strong> <button (click)="contador(resta) "> - </button> </h1>
    
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
  numero: number = 20;
  resta: number = -5;
  suma: number = 5;
  base: number = 55;


  acumular (valor: number) {
    this.numero += valor;
  }

  contador (seleccion: number = 5) {
   this.base  += seleccion;
  } 
}