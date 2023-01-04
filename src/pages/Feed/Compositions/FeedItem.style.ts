import styled from 'styled-components';
import { Mixin } from 'common';

export const Container = styled.div`
  width: 100%;
  padding: 12px 0px 20px;
  border: 1px solid ${({ theme }) => theme.color.MGrey};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Header = styled.div`
  ${Mixin.FlexLayout({ direction: 'row', justify: 'space-between', align: 'center' })};
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

export const MoreButtonWrapper = styled.div`
  position: relative;
`;

export const MoreButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  :hover {
    cursor: pointer;
  }
`;

export const DropDownWrapper = styled.div`
  position: absolute;
  right: 4px;
  width: 120px;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 1px 1px 6px #0000004d;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

export const DropDownItem = styled.div<{ isBorderBottom?: boolean; isWarningText?: boolean }>`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mixin.fontStyle({ fontFamily: 'pretendard', weight: 'normal', size: '14' })}
  line-height:16px;
  color: ${({ isWarningText, theme }) => (isWarningText ? theme.color.red : '')};
  border-bottom: ${({ isBorderBottom, theme }) => (isBorderBottom ? `1px solid ${theme.color.LGrey}` : '')};
`;

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin-top: 16px;
  padding: 0 16px;
`;
