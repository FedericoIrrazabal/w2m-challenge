import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule

  ],
  exports: [
    HomeComponent
  ]
})
export class RoutesModule { }
