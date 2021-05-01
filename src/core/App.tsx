import React, { memo } from 'react';

import { MemoInput } from '../components/Input/Input';
import { Container, ErrorTitle } from './styledApp';
import { MemoHeader } from '../components/Header/Header';
import { MemoWeatherBlock } from '../components/WeatherBlock/WeatherBlock';
import { MemoWeatherEveryHour } from '../components/WeatherEveryHour/WeatherEveryHour';
// @ts-ignore
import { SemipolarLoading as Loader } from 'react-loadingg';
import { MemoWeatherForWeek } from '../components/WeatherForWeek/WeatherForWeek';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const App: React.FC = () => {
    const { error, weatherMore, weatherInfo } = useSelector((state: RootState) => state.weather);

    return (
        <>
            <MemoHeader />
            <Container>
                <MemoInput />
                {error.length !== 0 ? (
                    <ErrorTitle>По вашему запросу ничего не найдено...</ErrorTitle>
                ) : (
                    <>
                        {weatherInfo ? <MemoWeatherBlock {...weatherInfo} /> : <Loader />}
                        {weatherMore ? <MemoWeatherEveryHour {...weatherMore} /> : <Loader />}
                        {weatherMore ? <MemoWeatherForWeek {...weatherMore} /> : <Loader />}
                    </>
                )}
            </Container>
        </>
    );
};

export const MemoApp = memo(App);
