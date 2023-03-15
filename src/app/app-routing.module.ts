import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNewHeroComponent } from './routes/edit-new-hero/edit-new-hero.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'hero/:id',
    component: EditNewHeroComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
