import React from 'react';

import {
    WrapHourBlock,
    HourTitle,
    HourSubtitle,
    HourImg,
    HourFlex,
    HourTemp,
    HourFeels,
    HourDescr,
} from './styledEveryHourBlock';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { IHourBlock } from '../../interfaces';

export const EveryHourBlock = ({ dt, feels_like, temp, weather }: IHourBlock) => {
    const time = dayjs.unix(dt).format('HH:MM');
    const date = dayjs.unix(dt).locale('ru').format('DD MMMM');

    let feelsTemp = Number(feels_like.toFixed());
    let temperature = Number(temp.toFixed());

    const { icon, description } = weather[0];

    return (
        <WrapHourBlock>
            <HourTitle>{time}</HourTitle>
            <HourSubtitle>{date}</HourSubtitle>
            <HourImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <HourFlex>
                <HourTemp>{temperature > 0 ? `+${temperature}` : temperature}°</HourTemp>
                <HourFeels>{feelsTemp > 0 ? `+${feelsTemp}` : feelsTemp}°</HourFeels>
            </HourFlex>
            <HourDescr>{description}</HourDescr>
        </WrapHourBlock>
    );
};