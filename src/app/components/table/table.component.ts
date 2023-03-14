import {Component, Input} from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/hero-interface';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input('dataSource') dataSource:HeroInterface[]=[];

  displayedColumns: string[] = ['id', 'name', 'alterEgo', 'publisher', 'firstAppearance' , 'actions'];
}





