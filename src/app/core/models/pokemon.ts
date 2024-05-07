export interface PokemonAttributes {
  id?: number;
  name: string;
  image?: string;
  type: string;
}

export class Pokemon {
  id?: number;
  name: string;
  image?: string;
  type: string;

  constructor({ id = 0, name, image = '', type }: PokemonAttributes) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = type;
  }
}
