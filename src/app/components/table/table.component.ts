import {Component, EventEmitter, Input, Output} from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/hero-interface';
import {Sort} from '@angular/material/sort';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input('dataSource') dataSource:HeroInterface[]=[];
  @Output() sortChange = new EventEmitter<Sort>();

  displayedColumns: string[] = ['id', 'name', 'alter_ego', 'publisher', 'first_appearance' , 'actions'];

  announceSortChange(sortState: Sort) {
    this.sortChange.emit(sortState);
  }
}





