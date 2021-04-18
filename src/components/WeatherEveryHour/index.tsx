import React from 'react';

import { Container } from '../../core/styledApp';
import { EveryHourBlock } from '../EveryHourBlock';
import { useTypedSelector } from '../../redux/typeSelector';
import { FlexItems, WrapperBlock } from './styledWeatherEveryHour';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './style.scss';

SwiperCore.use([Navigation]);

export const WeatherEveryHour: React.FC = () => {
    const { weather_more }: any = useTypedSelector((state) => state.weather);
    const { hourly } = weather_more;

    return (
        <Container>
            <WrapperBlock>
                <h3>Почасовой прогноз на ближайшие 2 суток</h3>
                <FlexItems>
                    <Swiper
                        className="swiper-1"
                        style={{ padding: '9px 18px' }}
                        navigation
                        spaceBetween={28}
                        slidesPerView={6}>
                        {hourly.map((obj: any, id: number) => (
                            <SwiperSlide key={id}>
                                <EveryHourBlock {...obj} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FlexItems>
            </WrapperBlock>
        </Container>
    );
};
