import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokemonClient } from './pokemon.api.client';

describe('PokemonClient', () => {
  let pokemonClient: PokemonClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonClient],
    }).compileComponents();
  });

  beforeEach(() => {
    pokemonClient = TestBed.inject(PokemonClient);
  });

  it('should create the service', () => {
    expect(pokemonClient).toBeTruthy();
  });

  it('should return getPokemonByType method response', () => {
    jest.spyOn(pokemonClient, 'getPokemonByType');

    const response = pokemonClient.getPokemonByType('bug');

    expect(pokemonClient.getPokemonByType).toHaveBeenCalledTimes(1);
    expect(response).toBeTruthy();
  });

  it('should return getPokemonByName method response', () => {
    jest.spyOn(pokemonClient, 'getPokemonByName');

    const response = pokemonClient.getPokemonByName('centiskorch');

    expect(pokemonClient.getPokemonByName).toHaveBeenCalledTimes(1);
    expect(response).toBeTruthy();
  });
});
