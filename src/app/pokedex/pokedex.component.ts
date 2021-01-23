import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../core/models/weather';
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

  constructor(
    private formBuilder: FormBuilder,
    private pokeService: PokedexService
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
