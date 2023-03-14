import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule,
    MatPaginatorModule

  ],
  exports: [
    HomeComponent
  ]
})
export class RoutesModule { }
