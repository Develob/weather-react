import { IWeather } from './ICommon';

export interface ITemperatureWeek {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ITempOneDay;
    feels_like: ITempOneDay;
    weather: IWeather[];
    clouds: number;
}

export interface ITempOneDay {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface IDaily {
    daily: ITemperatureWeek[];
}
