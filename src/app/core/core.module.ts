import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Clients
import { PokemonClient } from './clients/pokemon.api.client';
import { WeatherClient } from './clients/weather.api.client';

// App
import { ServiceModule } from './services/service.module';

@NgModule({
    declarations: [
    ],
    imports: [
        // Angular
        HttpClientModule,
        // App
        ServiceModule
    ],
    providers: [
        // App
        PokemonClient,
        WeatherClient
    ]
})
export class CoreModule { }
