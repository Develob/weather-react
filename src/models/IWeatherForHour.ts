import { IWeather } from './ICommon';
export interface IHourBlock {
    dt: number;
    feels_like: number;
    temp: number;
    weather: IWeather[];
}

export interface IHourly {
    hourly: IHourBlock[];
}
