import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from '../film/film.component';
import { FilmsComponent } from './films.component';


const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    children: [
      {
        path: ':id',
        component: FilmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
