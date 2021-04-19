import React, { memo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { sunriseImg, sunsetImg, cloudImg } from '../../assets';
import { ITemperatureWeek, ITempTypes, IWeather } from '../../interfaces';
import {
    TemperatureBlock,
    TemperatureCol,
    WeekDate,
    WeekFlex,
    WeekImg,
    WeekImgBlock,
    WeekMoreInfo,
    WeekMoreInfoBlock,
    WeekMoreInfoImg,
    WeekMoreInfoTime,
    WeekWeather,
    WrapWeek,
} from './styledForWeekBlock';

const ForWeekBlock: React.FC<ITemperatureWeek> = ({
    dt,
    sunrise,
    sunset,
    temp,
    feels_like,
    weather,
    clouds,
}) => {
    const date = dayjs.unix(dt).locale('ru').format('DD MMMM');
    const sunriseTime = dayjs.unix(sunrise).format('HH:mm');
    const sunsetTime = dayjs.unix(sunset).format('HH:mm');

    const { day, night, eve, morn }: ITempTypes = temp;

    const { description, icon }: IWeather = weather[0];

    const fixedNumber = (num: number) => {
        return Number(num.toFixed());
    };

    const percentOfClouds = clouds >= 0 && clouds <= 10;

    return (
        <WrapWeek>
            <WeekDate>{date}</WeekDate>
            <WeekFlex>
                <TemperatureCol>
                    <TemperatureBlock>
                        Утро: {morn > 0 ? `+${fixedNumber(morn)}` : fixedNumber(morn)}°
                        <span className="feels">
                            {feels_like.morn > 0
                                ? `+${fixedNumber(feels_like.morn)}`
                                : fixedNumber(feels_like.morn)}
                            °
                        </span>
                    </TemperatureBlock>
                    <TemperatureBlock>
                        День: {day > 0 ? `+${fixedNumber(day)}` : fixedNumber(day)}°
                        <span className="feels">
                            {feels_like.day > 0
                                ? `+${fixedNumber(feels_like.day)}`
                                : fixedNumber(feels_like.day)}
                            °
                        </span>
                    </TemperatureBlock>
                    <TemperatureBlock>
                        Вечер: {eve > 0 ? `+${fixedNumber(eve)}` : fixedNumber(eve)}°
                        <span className="feels">
                            {feels_like.eve > 0
                                ? `+${fixedNumber(feels_like.eve)}`
                                : fixedNumber(feels_like.eve)}
                            °
                        </span>
                    </TemperatureBlock>
                    <TemperatureBlock>
                        Ночь: {night > 0 ? `+${fixedNumber(night)}` : fixedNumber(night)}°
                        <span className="feels">
                            {feels_like.night > 0
                                ? `+${fixedNumber(feels_like.night)}`
                                : fixedNumber(feels_like.night)}
                            °
                        </span>
                    </TemperatureBlock>
                </TemperatureCol>
                <WeekImgBlock>
                    <WeekImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <WeekWeather>{description}</WeekWeather>
                </WeekImgBlock>
                <WeekMoreInfo>
                    <WeekMoreInfoBlock>
                        <WeekMoreInfoImg src={sunriseImg} />
                        <WeekMoreInfoTime>{sunriseTime}</WeekMoreInfoTime>
                    </WeekMoreInfoBlock>
                    <WeekMoreInfoBlock>
                        <WeekMoreInfoImg src={sunsetImg} />
                        <WeekMoreInfoTime>{sunsetTime}</WeekMoreInfoTime>
                    </WeekMoreInfoBlock>
                    <WeekMoreInfoBlock>
                        <WeekMoreInfoImg src={cloudImg} />
                        <WeekMoreInfoTime>
                            {percentOfClouds ? 'чистое небо' : `${clouds}%`}
                        </WeekMoreInfoTime>
                    </WeekMoreInfoBlock>
                </WeekMoreInfo>
            </WeekFlex>
        </WrapWeek>
    );
};

export const MemoForWeekBlock = memo(ForWeekBlock);
