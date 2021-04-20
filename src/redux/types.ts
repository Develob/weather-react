export enum ActionTypes {
    SEARCH_CITY = 'SEARCH_CITY',
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_MORE_INFO = 'FETCH_MORE_INFO',
    FETCH_ERROR = 'FETCH_ERROR',
    LOADING = 'LOADING',
}

interface SearchCityAction {
    type: ActionTypes.SEARCH_CITY;
    payload: string;
}

interface FetchWeatherAction {
    type: ActionTypes.FETCH_WEATHER;
    payload: [];
}

interface FetchMoreInfoAction {
    type: ActionTypes.FETCH_MORE_INFO;
    payload: [];
}

interface LoadingAction {
    type: ActionTypes.LOADING;
}

interface FetchError {
    type: ActionTypes.FETCH_ERROR;
    payload: [];
}

export type WeatherAction =
    | SearchCityAction
    | FetchWeatherAction
    | FetchMoreInfoAction
    | LoadingAction
    | FetchError;
