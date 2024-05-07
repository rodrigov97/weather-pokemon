import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe: any;
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType: any;
  withCredentials?: boolean;
}

@Injectable()
export class PokemonClient {
  private readonly pokemonAPi = `https://pokeapi.co/api/v2/`;

  constructor(private http: HttpClient) {}

  getPokemonByType(path: string, options?: HttpOptions): Observable<any> {
    return this.http.get(this.pokemonApiTypeUrl(path), options);
  }

  getPokemonByName(path: string, options?: HttpOptions): Observable<any> {
    return this.http.get(this.pokemonApiNameUrl(path), options);
  }

  private pokemonApiTypeUrl(typeName: string): string {
    const type = `type/${typeName}`;

    return [this.pokemonAPi, type].filter(Boolean).join('');
  }

  private pokemonApiNameUrl(pokemon: string): string {
    const name = `pokemon/${pokemon}`;

    return [this.pokemonAPi, name].filter(Boolean).join('');
  }
}
