import { FC, memo } from 'react';

import { Container } from '../../core/styledApp';
import { MemoEveryHourBlock } from '../EveryHourBlock/EveryHourBlock';
import { useTypedSelector } from '../../redux/typeSelector';
import { FlexItems, WrapperBlock } from './styledWeatherEveryHour';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './style.scss';
import { IHourBlock } from '../../models/IWeatherForHour';

SwiperCore.use([Navigation]);

const WeatherEveryHour: FC = () => {
    const { weatherMore } = useTypedSelector((state) => state.weather);
    const { hourly } = weatherMore;

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
                        {hourly.map((obj: IHourBlock, id: number) => (
                            <SwiperSlide key={id}>
                                <MemoEveryHourBlock {...obj} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FlexItems>
            </WrapperBlock>
        </Container>
    );
};

export const MemoWeatherEveryHour = memo(WeatherEveryHour);
