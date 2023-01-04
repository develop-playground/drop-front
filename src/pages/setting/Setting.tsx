import React from 'react';
import * as S from './Setting.style';
import settingDropIcon from 'asset/svg/settingDropIcon.svg';
import kakaoLogo from 'asset/svg/kakao_logo_setting.svg';
const Setting = () => {
  return (
    <S.Wrapper>
      <S.SettingBox>
        <S.SettingTop>
          <S.TitleWrapper>
            <S.Title>회원정보</S.Title>
          </S.TitleWrapper>
          <S.Border />
          <S.InfoBox>
            <img src={settingDropIcon} />
            <S.UserInfo>
              <img src={kakaoLogo} />
              <S.UserIdText>drop@naver.com</S.UserIdText>
            </S.UserInfo>
          </S.InfoBox>
        </S.SettingTop>
        <S.ContentWrapper>
          <div>서비스 이용 약관</div>
          <div>개인정보 취급 방침</div>
          <div>로그아웃</div>
          <div>회원 탈퇴</div>
        </S.ContentWrapper>
      </S.SettingBox>
    </S.Wrapper>
  );
};

export default Setting;
