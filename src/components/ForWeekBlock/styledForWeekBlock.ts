import styled from 'styled-components';

export const WrapWeek = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #f9f5f5;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    border-radius: 12px;
    min-height: 200px;
    width: 100%;
`;

export const WeekDate = styled.h3`
    font-size: 19px;
    font-weight: 600;
`;

export const WeekFlex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    align-items: center;

    @media (max-width: 590px) {
        flex-direction: column;
    }
`;

export const TemperatureCol = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 590px) {
        width: 100%;
    }
`;

export const TemperatureBlock = styled.div`
    display: flex;
    font-size: 17px;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }

    .feels {
        margin-left: 8px;
        opacity: 0.6;
    }

    @media (max-width: 770px) {
        font-size: 15px;
    }

    @media (max-width: 590px) {
        font-size: 17px;
    }
`;

export const WeekImgBlock = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media (max-width: 770px) {
        flex-direction: column;
    }

    @media (max-width: 520px) {
        margin: 20px 0;
    }
`;

export const WeekImg = styled.img`
    margin-right: 10px;
    background-color: #d0c3c3;
    border-radius: 42px;

    @media (max-width: 590px) {
        margin-right: 0;
        margin-bottom: 12px;
    }
`;

export const WeekWeather = styled.span`
    font-size: 18px;

    @media (max-width: 770px) {
        font-size: 15px;
    }
`;

export const WeekMoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    @media (max-width: 590px) {
        margin-top: 18px;
        width: 100%;
    }

    @media (max-width: 520px) {
        margin-top: 0;
    }
`;

export const WeekMoreInfoBlock = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const WeekMoreInfoImg = styled.img`
    width: 38px;
    height: 38px;
    margin-right: 10px;

    @media (max-width: 590px) {
        margin-right: 20px;
    }
`;

export const WeekMoreInfoTime = styled.span`
    font-size: 17px;

    @media (max-width: 770px) {
        font-size: 14px;
    }
`;
