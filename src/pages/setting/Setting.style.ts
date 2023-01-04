import styled from 'styled-components';
import { Mixin } from 'common';

export const Wrapper = styled.div`
  ${Mixin.FlexLayout({ justify: 'center' })}
  height: 100vh;
  padding-top: 120px;
  background-color: ${({ theme }) => theme.color.smokeWhite};
`;

export const SettingBox = styled.div`
  width: 120px;
  min-width: 440px;
  overflow: hidden;
  min-height: 340px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.Mgrey};
  background-color: ${({ theme }) => theme.color.white};
`;

export const SettingTop = styled.div`
  padding: 0 10px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: transparent;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.color.white};
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    width: 20px;
    height: 20px;
  }
`;

export const UserIdText = styled.div`
  ${Mixin.fontStyle({ fontFamily: 'pretendard', size: '14', weight: 300 })}
  color: ${({ theme }) => theme.color.white};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
`;
