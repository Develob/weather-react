import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, WeatherAction } from '../types';

const key = process.env.REACT_APP_API_KEY;

const config = {
    params: {
        lang: 'ru',
        units: 'metric',
    },
};

const apiLink = 'https://api.openweathermap.org/data/2.5/';
const exclued = '&exclude=minutely,alerts,current';

export const searchCity = (text: string) => (dispatch: Dispatch<WeatherAction>) => {
    dispatch({ type: ActionTypes.SEARCH_CITY, payload: text });
};

export const getWeather = (text: string) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            const weatherResponse = await axios.get(
                `${apiLink}weather?q=${text}&appid=${key}`,
                config,
            );
            const dataWeather = weatherResponse.data;
            const weatherMoreResponse = await axios.get(
                `${apiLink}onecall?lat=${dataWeather.coord.lat}&lon=${dataWeather.coord.lon}${exclued}&appid=${key}`,
                config,
            );
            dispatch({ type: ActionTypes.FETCH_WEATHER, payload: dataWeather });
            dispatch({ type: ActionTypes.FETCH_MORE_INFO, payload: weatherMoreResponse.data });
        } catch (e) {
            dispatch({ type: ActionTypes.FETCH_ERROR, payload: e });
        }
    };
};

export const setLoading = () => {
    return { type: ActionTypes.LOADING };
};
