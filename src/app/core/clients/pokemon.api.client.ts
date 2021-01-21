import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface HttpOptions {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe: any;
    params?: HttpParams | { [param: string]: string | string[]; };
    reportProgress?: boolean;
    responseType: any;
    withCredentials?: boolean;
}

@Injectable()
export class PokemonClient {
    private readonly pokemonAPi = ``;
    private readonly apiKey = `${environment.pokemonKey}`;

    constructor(
        private http: HttpClient
    ) { }

}
