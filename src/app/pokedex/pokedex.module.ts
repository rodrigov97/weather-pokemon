import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
// Modules
import { PokedexRoutingModule } from './pokedex.routing.module';
import { SharedModule } from '../shared/shared.module';
//Services
import { PokedexService } from './pokedex.service';

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
    providers: [
        // App
        PokedexService
    ]
})
export class PokedexModule { }
