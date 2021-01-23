import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    // Angular
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    CommonModule,
    // App
    AppRoutingModule,
    CoreModule,
    PokedexModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
