import styled from 'styled-components';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: 400;
`;

export const InputStyled = styled.input`
    margin: 22px 0;
    padding: 10px 14px;
    border-radius: 15px;
    border: 2px solid #42aaff;
    font-weight: 400;
    font-size: 17px;
    font-family: 'Gabriela', serif;

    &:focus,
    &:active {
        outline: none;
        box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.63);
    }
`;
