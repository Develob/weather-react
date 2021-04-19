import React, { memo } from 'react';
import dayjs from 'dayjs';

import { Column } from '../Header/styledHeader';
import { Container } from '../../core/styledApp';
import { useTypedSelector } from '../../redux/typeSelector';
import { ITemperature, IData, IWind, IWeather } from '../../interfaces';
import { plusImg, minusImg, windImg, humidityImg, pressureImg, cloudImg } from '../../assets';
import {
    AboutWeather,
    ImgInfo,
    OtherInfo,
    Therm,
    WeatherSubtitle,
    WeatherTitle,
    Wrapper,
    OptionInfo,
    OptionSpan,
} from './styledWeather';

const WeatherBlock: React.FC = () => {
    const { weather } = useTypedSelector((state) => state.weather);
    const { name, dt, weather: weatherInfo, main, wind, clouds, sys }: IData = weather;
    const { temp, temp_max, temp_min, feels_like, humidity }: ITemperature = main;
    const { speed }: IWind = wind;
    const { icon, description }: IWeather = weatherInfo[0];

    const date = dayjs.unix(dt).format('HH:MM');

    const fixedNumber = (num: number) => {
        return Number(num.toFixed());
    };

    const percentOfClouds = clouds.all >= 0 && clouds.all <= 10;

    let res = '';

    if (speed >= 0 && speed <= 0.29) {
        res = 'штиль';
    } else if (speed >= 0.3 && speed <= 7.9) {
        res = 'тихий/умеренный ветер';
    } else if (speed >= 8 && speed <= 17) {
        res = 'сильный ветер';
    } else if (speed >= 17) {
        res = 'очень сильный ветер';
    }

    return (
        <Container>
            <Wrapper>
                <WeatherTitle>
                    Погода в городе <b>{name}</b> "{sys.country}" сегодня
                </WeatherTitle>
                <WeatherSubtitle>Прогноз на: {date}</WeatherSubtitle>
                <AboutWeather>
                    <h4>{temp > 0 ? `+${fixedNumber(temp)}` : fixedNumber(temp)}°</h4>
                    <img
                        className="icon-weather"
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="погода"
                    />
                    <Column className="mr">
                        <span className="weather-info">{description}</span>
                        <span>
                            Ощущается как{' '}
                            {feels_like > 0
                                ? `+${fixedNumber(feels_like)}`
                                : fixedNumber(feels_like)}
                            °
                        </span>
                    </Column>
                    <Column>
                        <Therm>
                            <img height="32px" src={plusImg} alt="" />
                            <span>
                                Максимальная:{' '}
                                <b>
                                    {temp_max > 0
                                        ? `+${fixedNumber(temp_max)}`
                                        : fixedNumber(temp_max)}
                                    °
                                </b>
                            </span>
                        </Therm>
                        <Therm>
                            <img height="32px" src={minusImg} alt="" />
                            <span>
                                Минимальная:{' '}
                                <b>
                                    {temp_min > 0
                                        ? `+${fixedNumber(temp_min)}`
                                        : fixedNumber(temp_min)}
                                    °
                                </b>
                            </span>
                        </Therm>
                    </Column>
                </AboutWeather>
                <OtherInfo>
                    <OptionInfo>
                        <ImgInfo src={windImg} />
                        <OptionSpan>
                            {speed} м/с, {res}
                        </OptionSpan>
                    </OptionInfo>
                    <OptionInfo>
                        <ImgInfo src={humidityImg} />
                        <OptionSpan>Влажность: {humidity}%</OptionSpan>
                    </OptionInfo>
                    <OptionInfo>
                        <ImgInfo src={pressureImg} />
                        <OptionSpan>Атмосферное давление: {main.pressure} мм рт.ст. </OptionSpan>
                    </OptionInfo>
                    <OptionInfo>
                        <ImgInfo src={cloudImg} />
                        <OptionSpan>
                            Облачность: {percentOfClouds ? 'чистое небо' : `${clouds.all}%`}
                        </OptionSpan>
                    </OptionInfo>
                </OtherInfo>
            </Wrapper>
        </Container>
    );
};

export const MemoWeatherBlock = memo(WeatherBlock);
