import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Clients
import { PokemonClient } from '../core/clients/pokemon.api.client';
import { WeatherClient } from '../core/clients/weather.api.client';
import { Pokemon } from '../core/models/pokemon';
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

    getPokemonByType(typeName: string): Observable<any> {
        return this.pokeClient.getPokemon(typeName);
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

    parsePokemonResponse(json: any): Pokemon {
        var pokemon = this.getRandomPokemon(json);
        
        var attr = {
            id: 1,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            image: '',
            type: json.name
        };

        return new Pokemon(attr);
    }

    getRandomPokemon(json: any): any {
        var maxNumber = json['pokemon'].length - 1,
            index = Math.floor(Math.random() * (maxNumber - 0) + 0);
            
        return json['pokemon'][index].pokemon;
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
