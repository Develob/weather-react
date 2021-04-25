import { combineReducers } from 'redux';

import { fetchWeather } from './weatherReducer';

export const rootReducer = combineReducers({
    weather: fetchWeather,
});

export type RootState = ReturnType<typeof rootReducer>;
