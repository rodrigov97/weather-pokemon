import { TestBed } from '@angular/core/testing';

import { TypeHandlerService } from './type-handler.service';

const TYPES: { type: string; value: number }[] = [
  { type: 'bug', value: 25 },
  { type: 'fire', value: 34 },
  { type: 'grass', value: 13 },
  { type: 'ground', value: 16 },
  { type: 'ice', value: 1 },
  { type: 'normal', value: 10 },
  { type: 'rock', value: 28 },
  { type: 'water', value: 5 },
];

describe('TypeHandlerService', () => {
  let typeHandler: TypeHandlerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TypeHandlerService],
    }).compileComponents();
  });

  beforeEach(() => {
    typeHandler = TestBed.inject(TypeHandlerService);
  });

  it('should create the service', () => {
    expect(typeHandler).toBeTruthy();
  });

  TYPES.forEach((type: { type: string; value: number }) => {
    it(`should return the pokémon type equal to ${type.type}`, () => {
      jest.spyOn(typeHandler, 'getPokemonType');

      const result = typeHandler.getPokemonType(type.value);

      expect(result).toEqual(type.type);
    });
  });
});
