import { IData } from './IMainWeatherBlock';

export interface IWeatherState {
    text: string;
    weatherInfo: any;
    loading: boolean;
    weatherMore: any;
    error: [];
}

export interface IWeatherMore {
    lat: number;
    lon: number;
    hourly: any;
    daily: any;
}
