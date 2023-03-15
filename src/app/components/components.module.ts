import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableComponent } from './table/table.component';


import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [TableComponent, HeaderComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
   
  ],
  exports: [TableComponent, HeaderComponent, ModalComponent],
})
export class ComponentsModule {}
