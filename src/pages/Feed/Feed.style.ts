import styled from 'styled-components';
import { Mixin } from 'common';

export const Wrapper = styled.div`
  ${Mixin.FlexLayout({ justify: 'center' })}
  height: 100%;
  min-width: 440px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.smokeWhite};
`;
export const FeedItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 360px;
`;

export const EmptyWrapper = styled.div`
  ${Mixin.FlexLayout({ justify: 'center' })}
  //display: flex;
  width: 100%;
  //padding-left: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.LGrey};
`;
export const EmptyBox = styled.div`
  width: 100%;
  height: 100%;
  ${Mixin.FlexLayout({ direction: 'column', justify: 'center' })}
  gap:20px;
`;

export const EmptyText = styled.div`
  align-self: center;
  ${Mixin.fontStyle({ fontFamily: 'pretendard', weight: 'normal', size: '14' })}
  color: ${({ theme }) => theme.color.white}
`;

export const noMapPinImg = styled('img')`
  width: 50%;
  //height: 48px;
`;
