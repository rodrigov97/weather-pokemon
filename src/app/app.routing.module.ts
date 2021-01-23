import { NgModule } from '@angular/core';
// Modules
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'pokedex'
}, {
  path: 'pokedex',
  loadChildren: () => import('./pokedex/pokedex.module').then(l => l.PokedexModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
