import styled from 'styled-components';
import { Mixin } from '../../common';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${Mixin.FlexLayout({ justify: 'center' })};
`;

export const Content = styled.div`
  width: 360px;
  height: 100%;
  flex-shrink: 0;
  border: 1px solid #969696;
  padding: 0 16px;
  ${Mixin.FlexLayout({ direction: 'column', justify: 'center', align: 'center' })}; ;
`;

export const Title = styled.p`
  font-size: 14px;
  color: #000000;

  span {
    font-weight: bold;
  }
`;

export const DropLogo = styled.img`
  margin-top: 16px;
`;

export const LoginTextArea = styled.div`
  width: 100%;
  height: fit-content;
  ${Mixin.FlexLayout({ direction: 'row', justify: 'center', align: 'center' })};
  margin-top: 100px;
  gap: 7px;
`;

export const Divider = styled.div`
  min-width: 0;
  height: 1px;
  flex-grow: 1;
  background-color: #969696;
`;

export const LoginText = styled.div`
  font-size: 14px;
  color: #969696;
`;

export const KakaoLoginButton = styled.div`
  width: 100%;
  height: 44px;
  margin-top: 16px;
  font-size: 16px;
  color: #261a00;
  ${Mixin.FlexLayout({ direction: 'row', justify: 'space-between', align: 'center' })};
  cursor: pointer;
  background-color: #f9df4a;
`;

export const KakaoLogo = styled.img`
  margin-left: 12px;
`;
