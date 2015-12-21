import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.template.html',
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  constructor(private _heroService: HeroService) {}
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
}
