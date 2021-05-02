import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { MemoInput } from '../components/Input/Input';
import { ErrorTitle, Spiner } from './styledApp';
import { MemoHeader } from '../components/Header/Header';
import { MemoWeatherBlock } from '../components/WeatherBlock/WeatherBlock';
import { MemoWeatherEveryHour } from '../components/WeatherEveryHour/WeatherEveryHour';
import { MemoWeatherForWeek } from '../components/WeatherForWeek/WeatherForWeek';
import { RootState } from '../redux/reducers';
import PacmanLoader from 'react-spinners/PacmanLoader';

const App: React.FC = () => {
    const { error, weatherMore, weatherInfo } = useSelector((state: RootState) => state.weather);

    return (
        <>
            <MemoHeader />
            <MemoInput />
            {error.length !== 0 ? (
                <ErrorTitle>По вашему запросу ничего не найдено...</ErrorTitle>
            ) : (
                <>
                    {weatherInfo ? (
                        <MemoWeatherBlock {...weatherInfo} />
                    ) : (
                        <PacmanLoader color={'#42aaff'} css={Spiner} />
                    )}
                    {weatherMore ? <MemoWeatherEveryHour {...weatherMore} /> : null}
                    {weatherMore ? <MemoWeatherForWeek {...weatherMore} /> : null}
                </>
            )}
        </>
    );
};

export const MemoApp = memo(App);
