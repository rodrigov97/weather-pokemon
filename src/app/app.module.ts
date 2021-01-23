// Components
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
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
