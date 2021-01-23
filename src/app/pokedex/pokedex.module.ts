import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { PokedexRoutingModule } from './pokedex.routing.module';
import { SharedModule } from '../shared/shared.module';
// Components
import { PokedexComponent } from './pokedex.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        // App
        PokedexComponent
    ],
    imports: [
        // Angular
        CommonModule,
        ReactiveFormsModule,
        // App
        PokedexRoutingModule,
        SharedModule
    ],
    providers: []
})
export class PokedexModule { }
