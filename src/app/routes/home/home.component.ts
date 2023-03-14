import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/hero-interface';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroesDataSource: HeroInterface[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this._heroesService.getAllHeroes().subscribe(
      (response) => {
        this.heroesDataSource = response;
        console.log(this.heroesDataSource);
        
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
