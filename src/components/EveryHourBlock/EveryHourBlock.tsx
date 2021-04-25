import { memo, FC } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

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

import { fixedNumber } from '../utils/fixedNum';
import { IHourBlock } from '../../models/IWeatherForHour';
// const camelCase = require('camelcase');

const EveryHourBlock: FC<IHourBlock> = ({ dt, feels_like, temp, weather }) => {
    const time = dayjs.unix(dt).format('HH:MM');
    const date = dayjs.unix(dt).locale('ru').format('DD MMMM');

    const { icon, description } = weather[0];

    return (
        <WrapHourBlock>
            <HourTitle>{time}</HourTitle>
            <HourSubtitle>{date}</HourSubtitle>
            <HourImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <HourFlex>
                <HourTemp>
                    {feels_like > 0 ? `+${fixedNumber(feels_like)}` : fixedNumber(feels_like)}°
                </HourTemp>
                <HourFeels>{temp > 0 ? `+${fixedNumber(temp)}` : fixedNumber(temp)}°</HourFeels>
            </HourFlex>
            <HourDescr>{description}</HourDescr>
        </WrapHourBlock>
    );
};

export const MemoEveryHourBlock = memo(EveryHourBlock);
