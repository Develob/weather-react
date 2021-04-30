import { IData } from './IMainWeatherBlock';
import { IHourBlock } from './IWeatherForHour';
import { ITemperatureWeek } from './IWeatherForWeek';
export interface IWeatherState {
    text: string;
    weatherInfo: IData | null;
    loading: boolean;
    weatherMore: IWeatherMore | null;
    error: [];
}

export interface IWeatherMore {
    lat: number;
    lon: number;
    hourly: IHourBlock[];
    daily: ITemperatureWeek[];
}
