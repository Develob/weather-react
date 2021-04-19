import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { Container } from '../../core/styledApp';
import { Label, InputStyled } from './styledInput';
import { getWeather, setLoading, searchCity } from '../../redux/actions';

const Input: React.FC = () => {
    const dispatch = useDispatch();

    // eslint-disable-next-line
    const getData = useCallback(
        debounce((value) => {
            dispatch(getWeather(value));
            dispatch(setLoading());
        }, 1500),
        [],
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
                <InputStyled type="text" onChange={handlerChange} minLength={3} />
            </Label>
        </Container>
    );
};

export const MemoInput = memo(Input);
