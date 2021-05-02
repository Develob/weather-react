import { FC, memo } from 'react';
import { Container } from '../../core/styledApp';
import { MemoForWeekBlock } from '../ForWeekBlock/ForWeekBlock';
import { DisplayItems, WrapperContainer } from './styledWeatherForWeek';
import { ITemperatureWeek, IDaily } from '../../models/IWeatherForWeek';
import './style.scss';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation]);

const WeatherForWeek: FC<IDaily> = ({ daily }) => {
    return (
        <Container>
            <WrapperContainer>
                <h3>Прогноз на ближайшую неделю</h3>
                <DisplayItems>
                    <Swiper className="swiper-2" navigation spaceBetween={80} slidesPerView={1}>
                        {daily.map((obj: ITemperatureWeek, id: number) => (
                            <SwiperSlide key={id}>
                                <MemoForWeekBlock {...obj} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </DisplayItems>
            </WrapperContainer>
        </Container>
    );
};

export const MemoWeatherForWeek = memo(WeatherForWeek);
