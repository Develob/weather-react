import React from 'react';

import { Input } from '../components/Input';
import { Container, ErrorTitle } from './styledApp';
import { Header } from '../components/Header';
import { WeatherBlock } from '../components/WeatherBlock';
import { WeatherEveryHour } from '../components/WeatherEveryHour';

import { useTypedSelector } from '../redux/typeSelector';
// @ts-ignore
import { SemipolarLoading as Loader } from 'react-loadingg';
import { WeatherForWeek } from '../components/WeatherForWeek';

export const App: React.FC = () => {
    const { weather, weather_more, error } = useTypedSelector((state) => state.weather);

    return (
        <>
            <Header />
            <Container>
                <Input />
                {error.length !== 0 ? (
                    <ErrorTitle>По вашему запросу ничего не найдено...</ErrorTitle>
                ) : (
                    <>
                        {weather.length === 0 ? <Loader /> : <WeatherBlock />}
                        {weather_more.length === 0 ? <Loader /> : <WeatherEveryHour />}
                        {weather_more.length === 0 ? <Loader /> : <WeatherForWeek />}
                    </>
                )}
            </Container>
        </>
    );
};
