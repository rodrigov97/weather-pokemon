import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WeatherClient } from './weather.api.client';

describe('WeatherClient', () => {
  let weatherClient: WeatherClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherClient],
    }).compileComponents();
  });

  beforeEach(() => {
    weatherClient = TestBed.inject(WeatherClient);
  });

  it('should create the service', () => {
    expect(weatherClient).toBeTruthy();
  });

  it('should return getWeather method response', () => {
    jest.spyOn(weatherClient, 'getWeather');

    const response = weatherClient.getWeather('americana');

    expect(weatherClient.getWeather).toHaveBeenCalledTimes(1);
    expect(response).toBeTruthy();
  });
});
