export interface WeatherAttributes {
    description: string;
    isRaining: boolean;
    temperature: number;
    tempMin: number;
    tempMax: number;
}

export class Weather {
    description: string;
    isRaining: boolean;
    temperature: number;
    tempMin: number;
    tempMax: number;

    constructor(attr: WeatherAttributes) {
        this.description = attr.description;
        this.isRaining = attr.isRaining;
        this.temperature = attr.temperature;
        this.tempMin = attr.tempMin;
        this.tempMax = attr.tempMax;
    }
}