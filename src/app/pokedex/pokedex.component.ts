import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { Pokemon } from '../core/models/pokemon';
import { TypeHandlerService } from '../core/services/type-handler.service';
import { Weather } from '../core/models/weather';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  isLoading: boolean = false;

  formCity: UntypedFormGroup;

  hasError: boolean = false;
  error: any;

  hasPreviousSearch: boolean = false;

  weatherData: Weather;
  pokemonData: Pokemon;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private pokeService: PokedexService,
    private typeHandler: TypeHandlerService
  ) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(): void {

    this.formCity = this.formBuilder.group({
      cityName: [null, Validators.required]
    });
  }

  getCityWeather(): void {
    if (this.isFormValid) {
      this.hasError = false;
      this.hasPreviousSearch = true;

      this.isLoading = true;

      this.pokeService.getWeatherByCityName(this.cityName).subscribe(
        (response) => {

          this.weatherData = this.pokeService.parseWeatherResponse(response);

          this.getPokemon(this.weatherData.temperature);
        },
        (error) => {

          this.isLoading = false;
          this.hasError = true;
          this.error = this.pokeService.parseError(error.error);
        });

    }
    else {
      this.hasError = true;
      this.error = {
        code: 'None',
        type: 'Empty'
      };
    }
  }

  getPokemon(temp: number): void {
    var type = this.weatherData.isRaining ? 'electric' : this.typeHandler.getPokemonType(temp);

    this.pokeService.getPokemonByType(type).subscribe(
      (response) => {

        this.isLoading = false;
        this.pokemonData = this.pokeService.parsePokemonResponse(response);

        this.getPokemonByName(this.pokemonData);
      },
      (error) => {

        this.isLoading = false;
        this.hasError = true;
        this.error = this.pokeService.parseError(error.error);
      });
  }


  getPokemonByName(pokemon: Pokemon): void {

    this.pokeService.getPokemonByName(pokemon.name.toLowerCase()).subscribe(
      (response) => {

        this.isLoading = false;
        this.pokemonData = this.pokeService.addPokemonAttr(response, pokemon);
      },
      (error) => {

        this.isLoading = false;
        this.hasError = true;
        this.error = this.pokeService.parseError(error.error);
      });
  }

  get isFormValid(): boolean {
    return this.formCity.valid;
  }

  get controls(): { [key: string]: AbstractControl; } {
    return this.formCity.controls;
  }

  get cityName(): string {
    return this.controls.cityName.value;
  }
}
