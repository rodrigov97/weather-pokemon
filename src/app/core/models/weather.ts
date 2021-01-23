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

    constructor(attr: WeatherAttributes) {
        this.name = attr.name;
        this.description = attr.description;
        this.isRaining = attr.isRaining;
        this.temperature = attr.temperature;
        this.tempMin = attr.tempMin;
        this.tempMax = attr.tempMax;
    }
}