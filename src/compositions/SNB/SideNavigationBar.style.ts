import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { convertHexToRGBA, Mixin } from 'common';
export const Wrapper = styled.div`
  ${Mixin.FlexLayout({ direction: 'column' })}
  width: 240px;
  height: 100%;
  padding: 60px 0px 52px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Logo = styled.img``;

export const NavList = styled.div`
  margin-top: 36px;
  width: 100%;
  ${Mixin.FlexLayout({ direction: 'column' })};
`;

export const NavLinkWrapper = styled(NavLink)`
  width: 100%;
`;

export const NavLinkItem = styled.div<{ isActive?: boolean }>`
  ${Mixin.FlexLayout({ align: 'center' })}
  gap:12px;
  width: 100%;
  height: 60px;
  padding-left: 36px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.color.DGrey : '')};
  &:hover {
    background-color: ${({ theme }) => convertHexToRGBA(theme.color.DGrey, 50)};
  }
`;

export const LinkText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${Mixin.fontStyle({ fontFamily: 'pretendard', weight: 'normal', size: '16' })}
`;

export const DropPointWrapper = styled.div`
  margin-top: auto;
  margin-left: 40px;
  ${Mixin.FlexLayout({ align: 'center' })}
  gap:4px;
  ${Mixin.fontStyle({ fontFamily: 'Gmarket Sans', weight: 'medium', size: '16' })}
`;

export const DropPointText = styled.p`
  color: ${({ theme }) => theme.color.white};
`;

export const DropPointCount = styled.span`
  margin-left: 4px;
  color: ${({ theme }) => theme.color.lime};
`;
