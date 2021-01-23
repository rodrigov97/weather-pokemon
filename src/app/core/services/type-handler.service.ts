import { Injectable } from '@angular/core';

@Injectable()
export class TypeHandlerService {

  constructor() { }

  getPokemonType(temp: number): string {
    var type = '';

    if (temp < 5) {
      type = 'ice';
    }
    else if (temp >= 5 && temp < 10) {
      type = 'water';
    }
    else if (temp >= 12 && temp < 15) {
      type = 'grass';
    }
    else if (temp >= 15 && temp < 21) {
      type = 'ground';
    }
    else if (temp >= 23 && temp < 27) {
      type = 'bug';
    }
    else if (temp >= 27 && temp <= 33) {
      type = 'rock';
    }
    else if (temp > 33) {
      type = 'fire';
    }
    else {
      type = 'normal';
    }
    return type;
  }
}
