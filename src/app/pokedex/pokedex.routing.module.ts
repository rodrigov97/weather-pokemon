import { NgModule } from '@angular/core';
// Components
import { PokedexComponent } from './pokedex.component';
// Modules
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: PokedexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
