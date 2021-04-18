import styled from 'styled-components';

export const HeaderBlock = styled.header`
    padding: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f9f5f5;
    margin-bottom: 56px;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
`;

export const LogoBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const TitleApp = styled.h1`
    color: #000;
    font-size: 26px;
    line-height: 37px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const SubTitle = styled.h2`
    font-size: 18px;
    opacity: 0.7;
`;

export const LogoImg = styled.img`
    margin-right: 26px;
    max-width: 90px;
    max-height: 90px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    &.mr {
        margin-right: 28px;
    }
`;
