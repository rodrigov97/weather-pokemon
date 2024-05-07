import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

import { PokedexComponent } from './pokedex.component';
import { PokedexService } from './pokedex.service';
import { PokemonClient } from '../core/clients/pokemon.api.client';
import { ServiceModule } from '../core/services/service.module';
import { SharedModule } from '../shared/shared.module';
import { WeatherClient } from '../core/clients/weather.api.client';
import { of, throwError } from 'rxjs';
import { Weather } from '../core/models/weather';
import { BUG_POKEMONS } from '../shared/test/bug-pokemon.const';
import { CENTISKORCH } from '../shared/test/centiskorch.const';

const MockWeather: Weather = new Weather({
  name: 'Americana - BR',
  description: 'Céu limpo',
  isRaining: false,
  temperature: 24,
  tempMin: 24,
  tempMax: 24,
});

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;
  let pokedexService: PokedexService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        ServiceModule,
        SharedModule,
      ],
      providers: [PokedexService, PokemonClient, WeatherClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    pokedexService = TestBed.inject(PokedexService);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component', () => {
    jest.spyOn(component, 'ngOnInit');
    jest.spyOn(component, 'initForm');

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
    expect(component.initForm).toHaveBeenCalledTimes(1);
    expect(component.formCity).toBeInstanceOf(UntypedFormGroup);
  });

  it('should call weather api if form is valid', () => {
    jest.spyOn(pokedexService, 'getWeatherByCityName');

    component.formCity.get('cityName').setValue('americana');

    component.getCityWeather();

    fixture.detectChanges();

    expect(pokedexService.getWeatherByCityName).toHaveBeenCalledTimes(1);
    expect(component.hasError).toBeFalsy();
    expect(component.cityName).toEqual('americana');
  });

  it('should not call weather api if form is invalid', () => {
    component.formCity.get('cityName').setValue(null);

    component.getCityWeather();

    fixture.detectChanges();

    expect(component.hasError).toBeTruthy();
    expect(component.error.type).toEqual('Empty');
    expect(component.cityName).toEqual(null);
  });

  it('should get response from getWeatherByCityName successfully', () => {
    jest
      .spyOn(pokedexService, 'getWeatherByCityName')
      .mockReturnValue(of(MockWeather));
    jest.spyOn(pokedexService, 'parseError');

    component.formCity.get('cityName').setValue('americana');
    component.getCityWeather();

    expect(pokedexService.getWeatherByCityName).toHaveBeenCalledTimes(1);
    expect(pokedexService.parseError).toHaveBeenCalledTimes(0);
    expect(component.hasError).toBeFalsy();
    expect(component.cityName).toEqual('americana');
  });

  it('should get response from getWeatherByCityName with error', () => {
    jest
      .spyOn(pokedexService, 'getWeatherByCityName')
      .mockReturnValue(throwError({ cod: 404 }));
    jest.spyOn(pokedexService, 'parseError');

    component.formCity.get('cityName').setValue('americana');
    component.getCityWeather();

    expect(component.hasError).toBeTruthy();
    expect(pokedexService.getWeatherByCityName).toHaveBeenCalledTimes(1);
    expect(pokedexService.parseError).toHaveBeenCalledTimes(1);
    expect(component.cityName).toEqual('americana');
  });

  it('should get response from getPokemon successfully', () => {
    jest
      .spyOn(pokedexService, 'getPokemonByType')
      .mockReturnValue(of(BUG_POKEMONS));

    component.weatherData = MockWeather;
    component.getPokemon(24);

    expect(pokedexService.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(component.pokemonData).toBeTruthy();
    expect(component.hasError).toBeFalsy();
  });

  it('should get response from getPokemon successfully', () => {
    jest
      .spyOn(pokedexService, 'getPokemonByType')
      .mockReturnValue(of(BUG_POKEMONS));

    component.weatherData = {
      ...MockWeather,
      isRaining: true,
    };
    component.getPokemon(24);

    expect(pokedexService.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(component.pokemonData).toBeTruthy();
    expect(component.hasError).toBeFalsy();
  });

  it('should get response from getPokemon with error', () => {
    jest
      .spyOn(pokedexService, 'getPokemonByType')
      .mockReturnValue(throwError({ code: 404 }));
    jest.spyOn(pokedexService, 'parseError');

    component.weatherData = MockWeather;
    component.getPokemon(24);

    expect(pokedexService.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(pokedexService.parseError).toHaveBeenCalledTimes(1);
    expect(component.pokemonData).toBeFalsy();
    expect(component.hasError).toBeTruthy();
  });

  it('should get response from getPokemonByName successfully', () => {
    jest
      .spyOn(pokedexService, 'getPokemonByName')
      .mockReturnValue(of(CENTISKORCH));

    component.weatherData = MockWeather;
    component.getPokemonByName({
      id: null,
      name: 'centiskorch',
      image: null,
      type: 'bug',
    });

    expect(pokedexService.getPokemonByName).toHaveBeenCalledTimes(1);
    expect(component.pokemonData.id).toEqual(851);
    expect(component.hasError).toBeFalsy();
  });

  it('should get response from getPokemonByName with error', () => {
    jest
      .spyOn(pokedexService, 'getPokemonByName')
      .mockReturnValue(throwError({ code: 404 }));
    jest.spyOn(pokedexService, 'parseError');

    component.weatherData = MockWeather;
    component.getPokemonByName({
      id: null,
      name: 'centiskorch',
      image: null,
      type: 'bug',
    });

    expect(pokedexService.getPokemonByName).toHaveBeenCalledTimes(1);
    expect(pokedexService.parseError).toHaveBeenCalledTimes(1);
    expect(component.pokemonData?.id).toEqual(undefined);
    expect(component.hasError).toBeTruthy();
  });
});
