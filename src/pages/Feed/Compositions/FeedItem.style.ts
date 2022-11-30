import styled from 'styled-components';
import { Mixin } from 'common';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  ${Mixin.FlexLayout({ direction: 'row', justify: 'space-between' })};
`;

export const Title = styled.div`
  ${Mixin.FlexLayout({ align: 'baseline' })};
  gap: 8px;
`;

export const Icon = styled.img``;

export const DateText = styled.p`
  ${Mixin.fontStyle({ fontFamily: 'Gmarket Sans', size: '22', weight: 'bold' })}
  line-height:22px;
`;
export const Address = styled.p`
  ${Mixin.fontStyle({ fontFamily: 'pretendard', size: '12', weight: 'light' })}
  line-hegiht:12px;
`;

export const MoreButtonWrapper = styled.div``;

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 16px;
`;
