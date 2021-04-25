import React, { memo } from 'react';

import { MemoInput } from '../components/Input/Input';
import { Container, ErrorTitle } from './styledApp';
import { MemoHeader } from '../components/Header/Header';
import { MemoWeatherBlock } from '../components/WeatherBlock/WeatherBlock';
import { MemoWeatherEveryHour } from '../components/WeatherEveryHour/WeatherEveryHour';

import { useTypedSelector } from '../redux/typeSelector';
// @ts-ignore
import { SemipolarLoading as Loader } from 'react-loadingg';
import { MemoWeatherForWeek } from '../components/WeatherForWeek/WeatherForWeek';

const App: React.FC = () => {
    const { weatherInfo, weatherMore, error } = useTypedSelector((state) => state.weather);

    return (
        <>
            <MemoHeader />
            <Container>
                <MemoInput />
                {error.length !== 0 ? (
                    <ErrorTitle>По вашему запросу ничего не найдено...</ErrorTitle>
                ) : (
                    <>
                        {Object.keys(weatherInfo).length === 0 ? <Loader /> : <MemoWeatherBlock />}
                        {weatherMore.length === 0 ? <Loader /> : <MemoWeatherEveryHour />}
                        {weatherMore.length === 0 ? <Loader /> : <MemoWeatherForWeek />}
                    </>
                )}
            </Container>
        </>
    );
};

export const MemoApp = memo(App);
