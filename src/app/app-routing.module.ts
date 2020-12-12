import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './main-components/characters/characters.component';
import { ComicsComponent } from './main-components/comics/comics.component';
import { HomeComponent } from './main-components/home/home.component';
import { SeriesComponent } from './main-components/series/series.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'comics', component: ComicsComponent},
  {path:'series', component: SeriesComponent},
  {path:'characters', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
