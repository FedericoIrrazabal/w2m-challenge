import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { EditNewHeroComponent } from './edit-new-hero/edit-new-hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HomeComponent, EditNewHeroComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [HomeComponent],
})
export class RoutesModule {}
