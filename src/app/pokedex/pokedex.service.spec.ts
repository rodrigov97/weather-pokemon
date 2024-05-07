import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { BUG_POKEMONS } from '../shared/test/bug-pokemon.const';
import { CENTISKORCH } from '../shared/test/centiskorch.const';
import { PokedexService } from './pokedex.service';
import { Pokemon } from '../core/models/pokemon';
import { PokemonClient } from '../core/clients/pokemon.api.client';
import { Weather } from '../core/models/weather';
import { WEATHER } from '../shared/test/weather.const';
import { WeatherClient } from '../core/clients/weather.api.client';

describe('PokedexService', () => {
  let pokedexService: PokedexService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokedexService, WeatherClient, PokemonClient],
    }).compileComponents();
  });

  beforeEach(() => {
    pokedexService = TestBed.inject(PokedexService);
  });

  it('should create the service', () => {
    expect(pokedexService).toBeTruthy();
  });

  it('should return getPokemonByType method response', () => {
    jest.spyOn(pokedexService, 'getPokemonByType');

    const response = pokedexService.getPokemonByType('bug');

    expect(pokedexService.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(response).toBeTruthy();
  });

  it('should return getPokemonByName method response', () => {
    jest.spyOn(pokedexService, 'getPokemonByName');

    const response = pokedexService.getPokemonByName('centiskorch');

    expect(pokedexService.getPokemonByName).toHaveBeenCalledTimes(1);
    expect(response).toBeTruthy();
  });

  it('should return getWeatherByCityName method response', () => {
    jest.spyOn(pokedexService, 'getWeatherByCityName');

    const response = pokedexService.getWeatherByCityName('americana');

    expect(pokedexService.getWeatherByCityName).toHaveBeenCalledTimes(1);
    expect(response).toBeTruthy();
  });

  it('should parse getWeatherByCityName response', () => {
    let weather: Weather;

    jest
      .spyOn(pokedexService, 'getWeatherByCityName')
      .mockReturnValue(of(WEATHER));
    jest.spyOn(pokedexService, 'parseWeatherResponse');

    pokedexService.getWeatherByCityName('americana').subscribe((res) => {
      weather = pokedexService.parseWeatherResponse(res);
    });

    expect(pokedexService.getWeatherByCityName).toHaveBeenCalledTimes(1);
    expect(pokedexService.parseWeatherResponse).toHaveBeenCalledTimes(1);
    expect(weather).toBeInstanceOf(Weather);
  });

  it('should parse getPokemonByType response', () => {
    let pokemon: Pokemon;

    jest
      .spyOn(pokedexService, 'getPokemonByType')
      .mockReturnValue(of(BUG_POKEMONS));
    jest.spyOn(pokedexService, 'parsePokemonResponse');

    pokedexService.getPokemonByType('bug').subscribe((res) => {
      pokemon = pokedexService.parsePokemonResponse(res);
    });

    expect(pokedexService.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(pokedexService.parsePokemonResponse).toHaveBeenCalledTimes(1);
    expect(pokemon).toBeInstanceOf(Pokemon);
  });

  it('should parse getPokemonByName response', () => {
    let pokemonByType: Pokemon;
    let pokemon: Pokemon;
    let pokemonWithoutImage: Pokemon;

    jest
      .spyOn(pokedexService, 'getPokemonByType')
      .mockReturnValue(of(BUG_POKEMONS));
    jest
      .spyOn(pokedexService, 'getPokemonByName')
      .mockReturnValue(of(CENTISKORCH));
    jest.spyOn(pokedexService, 'addPokemonAttr');
    jest.spyOn(pokedexService, 'parsePokemonResponse');

    pokedexService.getPokemonByType('bug').subscribe((res) => {
      pokemonByType = pokedexService.parsePokemonResponse(res);
    });

    pokedexService.getPokemonByName('centiskorch').subscribe((res) => {
      pokemon = pokedexService.addPokemonAttr(res, pokemonByType);

      pokemonWithoutImage = pokedexService.addPokemonAttr(
        {
          ...res,
          sprites: {
            ...res.sprites,
            front_default: null,
          },
        },
        pokemonByType
      );
    });

    expect(pokedexService.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(pokedexService.getPokemonByName).toHaveBeenCalledTimes(1);
    expect(pokedexService.parsePokemonResponse).toHaveBeenCalledTimes(1);
    expect(pokedexService.addPokemonAttr).toHaveBeenCalledTimes(2);
    expect(pokemon).toBeInstanceOf(Pokemon);
    expect(pokemonWithoutImage).toBeInstanceOf(Pokemon);
  });

  it('should handle not found error', () => {
    const notFound = {
      cod: 404,
    };

    jest.spyOn(pokedexService, 'parseError');

    const treatedError = pokedexService.parseError(notFound);

    expect(pokedexService.parseError).toHaveBeenCalledTimes(1);
    expect(treatedError.type).toEqual('Not Found');
  });

  it('should handle unauthorized error', () => {
    const unauthorized = {
      cod: 401,
    };

    jest.spyOn(pokedexService, 'parseError');

    const treatedError = pokedexService.parseError(unauthorized);

    expect(pokedexService.parseError).toHaveBeenCalledTimes(1);
    expect(treatedError.type).toEqual('Unauthorized');
  });

  it('should handle unknow error', () => {
    const generic = {
      cod: 500,
    };

    jest.spyOn(pokedexService, 'parseError');

    const treatedError = pokedexService.parseError(generic);

    expect(pokedexService.parseError).toHaveBeenCalledTimes(1);
    expect(treatedError.type).toEqual('Unknow');
  });
});
