export interface WeatherAttributes {
  name: string;
  description: string;
  isRaining: boolean;
  temperature: number;
  tempMin: number;
  tempMax: number;
}

export class Weather {
  name: string;
  description: string;
  isRaining: boolean;
  temperature: number;
  tempMin: number;
  tempMax: number;

  constructor({
    name,
    description,
    isRaining,
    temperature,
    tempMin,
    tempMax,
  }: WeatherAttributes) {
    this.name = name;
    this.description = description;
    this.isRaining = isRaining;
    this.temperature = temperature;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
  }
}
