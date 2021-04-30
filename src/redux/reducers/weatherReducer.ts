import { ActionTypes, WeatherAction } from '../types';
import { IWeatherState } from '../../models/IState';

const initialState: IWeatherState = {
    text: '',
    weatherInfo: null,
    loading: false,
    weatherMore: null,
    error: [],
};

export const fetchWeather = (state = initialState, action: WeatherAction): IWeatherState => {
    switch (action.type) {
        case ActionTypes.SEARCH_CITY:
            return { ...state, text: action.payload, loading: false };
        case ActionTypes.FETCH_WEATHER:
            return { ...state, weatherInfo: action.payload, loading: false };
        case ActionTypes.FETCH_MORE_INFO:
            return { ...state, weatherMore: action.payload, loading: false };
        case ActionTypes.FETCH_ERROR:
            return { ...state, error: action.payload, loading: true };
        case ActionTypes.LOADING:
            return { ...state, loading: true, error: [] };
        default:
            return state;
    }
};
