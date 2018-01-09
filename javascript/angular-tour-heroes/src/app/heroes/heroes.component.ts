import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectHero: Hero;

  // onSelectedHero(hero: Hero) {
  //   this.selectHero = hero;
  // }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windostorm'
  // };

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
  }

}
