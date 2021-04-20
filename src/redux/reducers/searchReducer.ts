import { ActionTypes, WeatherAction } from '../types';
import { IWeatherState } from '../../types';

const initialState: IWeatherState = {
    text: '',
    weather: [],
    loading: false,
    weather_more: [],
    error: [],
};

export const fetchWeather = (state = initialState, action: WeatherAction): IWeatherState => {
    switch (action.type) {
        case ActionTypes.SEARCH_CITY:
            return { ...state, text: action.payload, loading: false };
        case ActionTypes.FETCH_WEATHER:
            return { ...state, weather: action.payload, loading: false };
        case ActionTypes.FETCH_MORE_INFO:
            return { ...state, weather_more: action.payload, loading: false };
        case ActionTypes.FETCH_ERROR:
            return { ...state, error: action.payload, loading: true };
        case ActionTypes.LOADING:
            return { ...state, loading: true, error: [] };
        default:
            return state;
    }
};
