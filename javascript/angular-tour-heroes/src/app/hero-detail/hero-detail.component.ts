import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  getHero(): void {
    // + convert string to number
    // paramMap , map to url query data
    // route.snapshot , static image of the route information shortly
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

}
