import styled from 'styled-components';

export const WrapperBlock = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-shadow: 0px 3px 8px 0px rgba(50 50 50 / 48%);
    background-color: #f9f5f5;
    border-radius: 15px;
    min-height: 250px;
    padding: 24px;

    & h3 {
        font-size: 24px;
        line-height: 37px;
    }

    @media (max-width: 520px) {
        & h3 {
            font-size: 18px;
        }
    }
`;

export const FlexItems = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
`;
