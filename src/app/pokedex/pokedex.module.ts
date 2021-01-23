// Components
import { PokedexComponent } from './pokedex.component';
// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokedexRoutingModule } from './pokedex.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
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
