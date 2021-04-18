import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { Container } from '../../core/styledApp';
import { Label, InputStyled } from './styledInput';
import { getWeather, setLoading, searchCity, getMoreInfo } from '../../redux/actions';
import { useTypedSelector } from '../../redux/typeSelector';

export const Input: React.FC = () => {
    const dispatch = useDispatch();
    const { weather } = useTypedSelector((state) => state.weather);
    const { coord } = weather;

    const getData = useCallback(
        debounce((value) => {
            dispatch(getWeather(value));
            dispatch(getMoreInfo(coord?.lat, coord?.lon));
            dispatch(setLoading());
        }, 1500),
        [getMoreInfo, coord?.lat, coord?.lon],
    );

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value.trim();
        if (target.length >= 3) {
            getData(target);
            dispatch(searchCity(target));
        }
    };

    return (
        <Container>
            <Label>
                Введите название вашего города
                <InputStyled type="text" onChange={handlerChange} />
            </Label>
        </Container>
    );
};
