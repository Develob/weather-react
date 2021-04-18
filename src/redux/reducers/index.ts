import { combineReducers } from 'redux';

import { fetchWeather } from './searchReducer';

export const rootReducer = combineReducers({
    weather: fetchWeather,
});

export type RootState = ReturnType<typeof rootReducer>;
