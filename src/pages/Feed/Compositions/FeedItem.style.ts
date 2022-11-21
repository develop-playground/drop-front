import styled from 'styled-components';
import { Mixin } from 'common';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  ${Mixin.FlexLayout({ direction: 'row', justify: 'space-between' })};
`;

export const Title = styled.div`
  ${Mixin.FlexLayout({})};
  gap: 8px;
`;

export const DateText = styled.div``;
export const Address = styled.div``;

export const MoreButtonWrapper = styled.div``;

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 16px;
`;
