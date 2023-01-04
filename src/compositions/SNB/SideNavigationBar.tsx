import React from 'react';
import * as S from './SideNavigationBar.style';
import logo_w from 'asset/svg/logo_w.svg';
import setting from 'asset/svg/setting.svg';
import settingYellow from 'asset/svg/setting_yellow.svg';
import home from 'asset/svg/home.svg';
import homeYellow from 'asset/svg/home_yellow.svg';
import pin from 'asset/svg/pin.svg';
import pinYellow from 'asset/svg/pin_yellow.svg';
import pinWhite from 'asset/svg/pin_w.svg';

const SideNavigationBar = () => {
  return (
    <S.Wrapper>
      <S.Logo src={logo_w} />
      <S.NavList>
        <S.NavLinkWrapper to={'memory'}>
          {({ isActive }) => (
            <S.NavLinkItem isActive={isActive}>
              <img src={isActive ? homeYellow : home} />
              <S.LinkText>홈</S.LinkText>
            </S.NavLinkItem>
          )}
        </S.NavLinkWrapper>
        <S.NavLinkWrapper to={'map'}>
          {({ isActive }) => (
            <S.NavLinkItem isActive={isActive}>
              <img src={isActive ? pinYellow : pin} />
              <S.LinkText>지도</S.LinkText>
            </S.NavLinkItem>
          )}
        </S.NavLinkWrapper>
        <S.NavLinkWrapper to={'setting'}>
          {({ isActive }) => (
            <S.NavLinkItem isActive={isActive}>
              <img src={isActive ? settingYellow : setting} />
              <S.LinkText>설정</S.LinkText>
            </S.NavLinkItem>
          )}
        </S.NavLinkWrapper>
      </S.NavList>
      <S.DropPointWrapper>
        <img src={pinWhite} />
        <S.DropPointText>drop point</S.DropPointText>
        <S.DropPointCount>0</S.DropPointCount>
      </S.DropPointWrapper>
    </S.Wrapper>
  );
};

export default SideNavigationBar;
