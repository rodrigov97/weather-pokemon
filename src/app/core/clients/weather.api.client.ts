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
export class WeatherClient {
    private readonly weatherAPi = `api.openweathermap.org/data/2.5/`;
    private readonly apiKey = `appid=${environment.weatherKey}`;

    constructor(
        private http: HttpClient
    ) { }

    getWeather(path: string, options?: HttpOptions): Observable<any> {
        return this.http.get(this.weatherApiUrl(path), options)
    }

    private weatherApiUrl(cityName: string): string {
        const city = `weather?q=${cityName}&`;

        return [this.weatherAPi, city, this.apiKey].filter(Boolean).join('/');
    }
}
