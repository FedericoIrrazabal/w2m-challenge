import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/hero-interface';
import { ControllerDataSourceInterface } from 'src/app/interfaces/heroes-pagination';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    _limit: 10,
    _sort: 'id',
    _order: 'asc',
    q: '',
  };
  isFilterById: boolean = false;

  constructor(
    private _heroesService: HeroesService,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this._heroesService.getAllHeroes(this.controllerDataSource).subscribe(
      (response) => {
        this.heroesDataSource = response.body;
        this.totalElements = response.headers.get('X-Total-Count');
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

  private deleteHero(heroId: number) {
    this._heroesService.deleteHero(heroId).subscribe(
      (res) => {
        this.openSnackBar('Hero deleted successfully', 'Ok');
        this.getHeroes();
      },
      (err) => {
        this.openSnackBar('Error deleting hero', 'Ok');
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

  onShowModalDelete(value: HeroInterface) {
    this.openDialog('10ms', '10ms', value);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    hero: HeroInterface
  ): void {
    let dialogRef = this._dialog.open(ModalComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    let instance = dialogRef.componentInstance;
    instance.superHero = hero.name;
    instance.dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteHero(hero.id);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
