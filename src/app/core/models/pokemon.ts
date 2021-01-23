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

    constructor(attr: PokemonAttributes) {
        this.id = attr.id;
        this.name = attr.name;
        this.image = attr.image;
        this.type = attr.type;
    }
}