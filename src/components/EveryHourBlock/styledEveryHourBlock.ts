import styled from 'styled-components';

export const WrapHourBlock = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    background-color: #f9f5f5;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    border-radius: 12px;
    height: 140px;
    width: 100px;
    justify-content: space-between;
`;

export const HourTitle = styled.h4`
    font-size: 18px;
    line-height: 17px;
    font-weight: 600;
`;

export const HourSubtitle = styled.span`
    font-size: 16px;
    line-height: 14px;
`;

export const HourImg = styled.img`
    width: 36px;
    height: 36px;
    background-color: #d0c3c3;
    border-radius: 42px;
`;

export const HourFlex = styled.div`
    display: flex;
`;

export const HourTemp = styled.span`
    font-size: 15px;
    margin-right: 8px;
`;

export const HourFeels = styled.span`
    font-size: 15px;
    opacity: 0.6;
`;

export const HourDescr = styled.span`
    font-size: 13px;
`;
