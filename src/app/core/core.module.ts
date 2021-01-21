import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
        // Angular
        PokemonClient,
        WeatherClient
    ]
})
export class CoreModule { }
