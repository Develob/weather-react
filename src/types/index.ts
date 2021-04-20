export interface IWeatherState {
    text: string;
    weather: any;
    loading: boolean;
    weather_more: any;
    error: [];
}

export interface IWeatherMore {
    lat: number;
    lon: number;
    hourly: any;
    daily: any;
}

export interface ITemperature {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
    pressure?: number;
}

export interface ITempTypes {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface ITemperatureWeek {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ITempTypes;
    feels_like: ITempTypes;
    weather: IWeatherObject[];
    clouds: number;
}

export interface IWeather {
    description: string;
    icon: string;
}

export interface IWind {
    speed: number | boolean;
}

export interface IWeatherObject {
    icon: string;
    description: string;
}

export interface IHourBlock {
    dt: number;
    feels_like: number;
    temp: number;
    weather: IWeatherObject[];
}

export interface ISysTypes {
    country: string;
}

export interface IClouds {
    all: number;
}

export interface IData {
    name: string;
    dt: number;
    weather: IWeatherObject[];
    main: ITemperature;
    wind: IWind;
    clouds: IClouds;
    sys: ISysTypes;
    coord: ICoordinate;
}

export interface ICoordinate {
    lat: number;
    lon: number;
}
