import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  formCity: FormGroup;

  hasError: boolean = false;

  hasPreviousSearch: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(): void {

    this.formCity = this.formBuilder.group({
      cityName: [null, Validators.required]
    });
  }

  getPokemon(): void {
    if (this.isFormValid) {
      this.hasError = false;
      this.hasPreviousSearch = true;

    }
    else {
      this.hasError = true;
    }
  }

  get isFormValid(): boolean {
    return this.formCity.valid;
  }

  get controls(): { [key: string]: AbstractControl; } {
    return this.formCity.controls;
  }

}
