import React, { memo } from 'react';

import { MemoInput } from '../components/Input';
import { Container, ErrorTitle } from './styledApp';
import { Header } from '../components/Header';
import { MemoWeatherBlock } from '../components/WeatherBlock';
import { MemoWeatherEveryHour } from '../components/WeatherEveryHour';

import { useTypedSelector } from '../redux/typeSelector';
// @ts-ignore
import { SemipolarLoading as Loader } from 'react-loadingg';
import { MemoWeatherForWeek } from '../components/WeatherForWeek';

const App: React.FC = () => {
    const { weather, weather_more, error } = useTypedSelector((state) => state.weather);

    return (
        <>
            <Header />
            <Container>
                <MemoInput />
                {error.length !== 0 ? (
                    <ErrorTitle>По вашему запросу ничего не найдено...</ErrorTitle>
                ) : (
                    <>
                        {weather.length === 0 ? <Loader /> : <MemoWeatherBlock />}
                        {weather_more.length === 0 ? <Loader /> : <MemoWeatherEveryHour />}
                        {weather_more.length === 0 ? <Loader /> : <MemoWeatherForWeek />}
                    </>
                )}
            </Container>
        </>
    );
};

export const MemoApp = memo(App);
