import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// App
import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex.routing.module';

@NgModule({
    declarations: [
        //App
        PokedexComponent
    ],
    imports: [
        //App
        PokedexRoutingModule,
        SharedModule
    ],
    providers: []
})
export class PokedexModule { }
