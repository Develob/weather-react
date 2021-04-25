import { IWeather } from './ICommon';

export interface IData {
    name: string;
    dt: number;
    weather: IWeather[];
    main: ITemperature;
    wind: IWind;
    clouds: IClouds;
    sys: ICountry;
    coord: ICoordinate;
}

export interface ITemperature {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
    pressure?: number;
}

export interface IWind {
    speed: number | boolean;
}

export interface ICountry {
    country: string;
}

export interface IClouds {
    all: number;
}

export interface ICoordinate {
    lat: number;
    lon: number;
}
