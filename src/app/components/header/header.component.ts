import { Component, EventEmitter, Output } from '@angular/core';
import { dataForSearchInterface } from 'src/app/interfaces/search-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  query: string = '';

  @Output() dataForSearchChange = new EventEmitter<string>();
  @Output() changeCheckbox = new EventEmitter<boolean>();

  onSearch(searchParam: string) {
    this.query = searchParam;
    this.dataForSearchChange.emit(searchParam);
  }

  onChangeCheckbox(event: any) {    
    this.changeCheckbox.emit(event.checked);
  }
}
