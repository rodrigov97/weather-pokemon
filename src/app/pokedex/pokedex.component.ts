import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../core/models/pokemon';
import { Weather } from '../core/models/weather';
import { TypeHandlerService } from '../core/services/type-handler.service';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  isLoading: boolean = false;

  formCity: FormGroup;

  hasError: boolean = false;
  errorType: string = '';

  hasPreviousSearch: boolean = false;

  weatherData: Weather;
  pokemonData: Pokemon;

  constructor(
    private formBuilder: FormBuilder,
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

          this.isLoading = false;
          this.weatherData = this.pokeService.parseWeatherResponse(response);

          this.getPokemon(this.weatherData.temperature);
        },
        (error) => {

          this.isLoading = false;
          this.hasError = true;
          this.errorType = '404';
          return this.pokeService.parseError(error.error);
        });

    }
    else {
      this.hasError = true;
      this.errorType = 'empty';
    }
  }

  getPokemon(temp: number): void {
    var type = this.weatherData.isRaining ? 'eletric' : this.typeHandler.getPokemonType(temp);
    
    this.pokeService.getPokemonByType(type).subscribe(
      (response) => {

        this.isLoading = false;
        this.pokemonData = this.pokeService.parsePokemonResponse(response);
      },
      (error) => {

        this.isLoading = false;
        this.hasError = true;
        this.errorType = '404';
        return this.pokeService.parseError(error.error);
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
