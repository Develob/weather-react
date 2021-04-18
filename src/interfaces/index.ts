export interface IWeatherState {
    text: string;
    weather: any;
    loading: boolean;
    weather_more: any;
    error: [];
}

export interface ITemperature {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
}

export interface ITemperatureWeek {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: any;
    feels_like: any;
    weather: any;
    clouds: number;
}

export interface ITempTypes {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface IWeather {
    description: string;
    icon: string;
}

export interface IWind {
    speed: number | boolean;
}

export interface IHourBlock {
    dt: number;
    feels_like: number;
    temp: number;
    weather: any;
}

export interface IData {
    name: string;
    dt: number;
    weather: any;
    main: any;
    wind: any;
    clouds: any;
    sys: any;
}
