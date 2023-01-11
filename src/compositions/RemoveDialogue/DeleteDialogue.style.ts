import styled from 'styled-components';
import { Mixin } from '../../common';

export const Wrapper = styled.div`
  border-radius: 5px;
  width: 300px;
  height: 130px;
  background-color: white;
  overflow: hidden;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 32px;
`;

export const Body = styled.div`
  height: 65px;
  ${Mixin.FlexLayout({ justify: 'center', align: 'center' })}
  ${Mixin.fontStyle({ fontFamily: 'pretendard', size: '14', weight: 400 })}
`;

export const Bottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.MGrey};
  ${Mixin.FlexLayout({ justify: 'center', align: 'center' })}
`;

export const CancelButton = styled.div`
  :hover {
    cursor: pointer;
  }
  width: 50%;
  height: 30px;
  border-right: 1px solid ${({ theme }) => theme.color.MGrey};
  ${Mixin.FlexLayout({ justify: 'center', align: 'center' })}
`;

export const BottomButton = styled.div`
  :hover {
    cursor: pointer;
  }
  color: red;
  width: 50%;
  height: 30px;
  ${Mixin.FlexLayout({ justify: 'center', align: 'center' })}
`;
