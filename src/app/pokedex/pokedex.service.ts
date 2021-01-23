import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Clients
import { PokemonClient } from '../core/clients/pokemon.api.client';
import { WeatherClient } from '../core/clients/weather.api.client';
import { Weather } from '../core/models/weather';

@Injectable()
export class PokedexService {

    constructor(
        private pokeClient: PokemonClient,
        private weatherClient: WeatherClient
    ) { }

    getWeatherByCityName(cityName: string): Observable<any> {
        return this.weatherClient.getWeather(cityName);
    }

    parseWeatherResponse(json: any): Weather {
        var attr = {
            name: json.name,
            description: json['weather'][0].description,
            isRaining: json['weather'][0].main.includes('Rain'),
            temperature: json['main'].temp,
            tempMin: json['main'].temp_max,
            tempMax: json['main'].temp_min
        };

        return new Weather(attr);
    }

    parseError(error: any): {} {
        if (error.cod === '404') {
            return error = {
                code: error.cod,
                type: 'Not Found',
                message: 'Cidade não encontrada !'
            };
        }
        else if (error.cod === '401') {
            return error = {
                code: error.cod,
                type: 'Unauthorized',
                message: 'Acesso não autorizado'
            };
        }
        else {
            return error = {
                code: 'None',
                type: 'Unknow',
                message: 'Erro desconhecido'
            };
        }
    }

}
