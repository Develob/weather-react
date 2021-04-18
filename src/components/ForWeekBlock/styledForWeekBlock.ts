import styled from 'styled-components';

export const WrapWeek = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #f9f5f5;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    border-radius: 12px;
    height: 200px;
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
`;

export const TemperatureCol = styled.div`
    display: flex;
    flex-direction: column;
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
`;

export const WeekImgBlock = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const WeekImg = styled.img`
    margin-right: 10px;
    background-color: #d0c3c3;
    border-radius: 42px;
`;

export const WeekWeather = styled.span`
    font-size: 18px;
`;

export const WeekMoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
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
`;

export const WeekMoreInfoTime = styled.span`
    font-size: 17px;
`;
