import styled from 'styled-components';

export const WrapperContainer = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    background-color: #f9f5f5;
    border-radius: 15px;
    min-height: 270px;
    padding: 24px;

    & h3 {
        font-size: 24px;
        line-height: 37px;
    }
`;

export const DisplayItems = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 16px;
    width: 100%;
`;
