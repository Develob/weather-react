import React from 'react';

import { logo } from '../../assets';
import { LogoBlock, HeaderBlock, TitleApp, SubTitle, Column, LogoImg } from './styledHeader';

export const Header: React.FC = () => {
    return (
        <HeaderBlock>
            <LogoBlock>
                <LogoImg src={logo} alt="logo-image" />
                <Column>
                    <TitleApp>React-Weather-App</TitleApp>
                    <SubTitle>Приложение для просмотра прогноза погоды</SubTitle>
                </Column>
            </LogoBlock>
        </HeaderBlock>
    );
};
