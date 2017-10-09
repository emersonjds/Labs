import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(public navCtrl: NavController) {
    this.carros = [
     {nome: 'Azera v6', preco:85000},
     {nome: 'BMW 325i', preco:97000},
     {nome: 'Porshe Cayenne', preco:250000},
     {nome: 'Veloster', preco:49000},
     {nome: 'Porshe Panammera', preco:190000},
     {nome: 'ix35', preco:85000},
     {nome: 'Gol g5', preco:20000},
     {nome: 'Corsa Classic', preco:19000},
     {nome: 'Gol 2000', preco:7000},
     {nome: 'xj6 2012', preco:20000},
    ]
  }

}
