import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9f5f5;
    min-height: 450px;
    border-radius: 15px;
    padding: 24px;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
`;

export const WeatherTitle = styled.h2`
    font-size: 24px;
    line-height: 37px;

    & b {
        font-size: 30px;
        border-bottom: 1px solid #42aaff;
    }

    @media (max-width: 520px) {
        font-size: 18px;

        & b {
            font-size: 21px;
        }
    }
`;

export const WeatherSubtitle = styled.h3`
    font-size: 24px;
    margin-top: 30px;

    @media (max-width: 520px) {
        font-size: 18px;
        margin-top: 16px;
    }
`;

export const AboutWeather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    & h4 {
        font-size: 52px;
        font-weight: 600;
    }

    & .weather-info {
        font-size: 32px;
        margin-bottom: 6px;
    }

    .icon-weather {
        background-color: #d0c3c3;
        border-radius: 42px;
        margin: 0 20px;
    }

    @media (max-width: 620px) {
        flex-direction: column;
        align-items: flex-start;
        margin: 12px 0;

        & h4 {
            font-size: 43px;
            margin: 8px auto;
        }

        .icon-weather {
            margin: 0 auto;
        }
    }

    @media (max-width: 520px) {
        & h4 {
            font-size: 33px;
        }

        & .weather-info {
            font-size: 26px;
        }
    }
`;

export const Therm = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }

    & b {
        font-size: 18px;
    }
`;

export const OtherInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 2px solid #ccc;
    padding-top: 16px;
`;

export const OptionInfo = styled.div`
    display: flex;
    margin-bottom: 8px;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const OptionSpan = styled.span`
    font-size: 19px;

    @media (max-width: 520px) {
        font-size: 15px;
    }
`;

export const ImgInfo = styled.img`
    height: 32px;
    margin-right: 16px;
`;
