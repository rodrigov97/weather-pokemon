import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PokedexModule } from './pokedex/pokedex.module';
// Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Angular
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
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
