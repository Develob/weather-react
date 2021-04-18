import axios from 'axios';
import { ActionTypes, WeatherAction } from '../interface';
import { Dispatch } from 'redux';

const key = process.env.REACT_APP_API_KEY;

const apiLink = 'http://api.openweathermap.org/data/2.5/';
const lang = '&lang=ru';
const query = '&units=metric';
const exclued = '&exclude=minutely,alerts,current';

export const setLoading = () => {
    return { type: ActionTypes.LOADING };
};

export const searchCity = (text: string) => (dispatch: Dispatch<WeatherAction>) => {
    dispatch({ type: ActionTypes.SEARCH_CITY, payload: text });
};

export const getWeather = (text: string) => (dispatch: Dispatch<WeatherAction>) => {
    axios
        .get(`${apiLink}weather?q=${text}&appid=${key}${lang}${query}`)
        .then(({ data }) => {
            dispatch({ type: ActionTypes.FETCH_WEATHER, payload: data });
        })
        .catch((e) =>
            dispatch({
                type: ActionTypes.FETCH_ERROR,
                payload: e,
            }),
        );
};

export const getMoreInfo = (lat: number, lon: number) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            const response = await axios.get(
                `${apiLink}onecall?lat=${lat}&lon=${lon}${exclued}&appid=${key}${lang}${query}`,
            );
            dispatch({ type: ActionTypes.FETCH_MORE_INFO, payload: response.data });
        } catch (e) {
            console.log(e);
        }
    };
};
