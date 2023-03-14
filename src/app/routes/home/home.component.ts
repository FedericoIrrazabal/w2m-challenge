import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/hero-interface';
import { ControllerDataSourceInterface } from 'src/app/interfaces/heroes-pagination';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { Sort } from '@angular/material/sort';
import { dataForSearchInterface } from '../../interfaces/search-interface';

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
    q: '',
  };
  isFilterById: boolean = false;

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this._heroesService.getAllHeroes(this.controllerDataSource).subscribe(
      (response) => {
        if (this.controllerDataSource.q === '') {
          this.totalElements = 20;
        } else {
          this.totalElements = response.length;
        }
        this.heroesDataSource = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getHero(id: string) {
    this.heroesDataSource = [];
    this._heroesService.getHero(id).subscribe(
      (response) => {
        this.totalElements = response.length;
        this.heroesDataSource = response;
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

  onSearchChange(query: string) {
    this.controllerDataSource.q = query;
    if (this.isFilterById) {
      this.getHero(query);
    } else {
      this.getHeroes();
    }
  }

  onChangeCheckbox(event: boolean) {
    this.isFilterById = event;
    this.onSearchChange(this.controllerDataSource.q || '');
  }
}
