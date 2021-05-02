import styled from 'styled-components';

export const HeaderBlock = styled.header`
    padding: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f9f5f5;
    margin-bottom: 56px;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    width: 100%;

    @media (max-width: 520px) {
        margin-bottom: 22px;
    }
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

    @media (max-width: 520px) {
        font-size: 18px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 18px;
    opacity: 0.7;

    @media (max-width: 520px) {
        font-size: 13px;
    }
`;

export const LogoImg = styled.img`
    margin-right: 26px;
    max-width: 90px;
    max-height: 90px;

    @media (max-width: 520px) {
        max-width: 64px;
        max-height: 64px;
        margin-right: 20px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    &.mr {
        margin-right: 28px;
    }

    @media (max-width: 620px) {
        &.mr {
            margin-right: 0;
            margin: 12px auto;
            text-align: center;
        }
    }

    @media (max-width: 520px) {
        &.mr {
            margin: 20px auto;
        }
    }
`;
