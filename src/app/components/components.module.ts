import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    ModalComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [TableComponent, HeaderComponent, ModalComponent, SpinnerComponent],
})
export class ComponentsModule {}
