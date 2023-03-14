import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/hero-interface';
import { ControllerDataSourceInterface } from 'src/app/interfaces/heroes-pagination';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroesDataSource: HeroInterface[] = [];
  totalElements: number = 20;
  controllerDataSource: ControllerDataSourceInterface = {
    _page: 0,
    _limit: 5,
    _sort: 'id',
    _order: 'asc',
  };

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this._heroesService.getAllHeroes(this.controllerDataSource).subscribe(
      (response) => {
        this.heroesDataSource = response;
        console.log(this.heroesDataSource);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onPageChange(event: any) {
    this.controllerDataSource._page = event.pageIndex + 1;
    this.controllerDataSource._limit = event.pageSize;
    this.getHeroes();
  }

  onSortChange(event: Sort) {
    this.controllerDataSource._sort = event.active;
    this.controllerDataSource._order = event.direction;
    this.getHeroes();
  }
}
