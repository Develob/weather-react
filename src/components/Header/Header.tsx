import { FC, memo } from 'react';
import { logo } from '../../assets';
import { LogoBlock, HeaderBlock, TitleApp, SubTitle, Column, LogoImg } from './styledHeader';

const Header: FC = () => {
    return (
        <HeaderBlock>
            <LogoBlock>
                <LogoImg src={logo} alt="логотип" />
                <Column>
                    <TitleApp>React-Weather-App</TitleApp>
                    <SubTitle>Приложение для просмотра прогноза погоды</SubTitle>
                </Column>
            </LogoBlock>
        </HeaderBlock>
    );
};

export const MemoHeader = memo(Header);
