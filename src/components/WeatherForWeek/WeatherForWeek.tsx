import { FC, memo } from 'react';
import { Container } from '../../core/styledApp';
import { MemoForWeekBlock } from '../ForWeekBlock/ForWeekBlock';
import { useTypedSelector } from '../../redux/typeSelector';
import { DisplayItems, WrapperContainer } from './styledWeatherForWeek';
import { ITemperatureWeek } from '../../models/IWeatherForWeek';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './style.scss';

SwiperCore.use([Navigation]);

const WeatherForWeek: FC = () => {
    const { weatherMore } = useTypedSelector((state) => state.weather);
    const { daily } = weatherMore;

    return (
        <Container>
            <WrapperContainer>
                <h3>Прогноз на ближайшую неделю</h3>
                <DisplayItems>
                    <Swiper
                        className="swiper-2"
                        style={{ padding: '9px 10px' }}
                        navigation
                        spaceBetween={80}
                        width={910}
                        slidesPerView={1}>
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
