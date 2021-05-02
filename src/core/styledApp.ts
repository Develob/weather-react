import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    padding: 0 15px;
    margin: 0 auto;
    width: 100%;
`;

export const ErrorTitle = styled.h1`
    text-align: center;
    margin: 50px 0;
    font-size: 19px;

    @media (max-width: 560px) {
        font-size: 14px;
    }
`;

export const Spiner = `
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
