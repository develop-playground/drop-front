import React from 'react';
import * as S from './Login.style';
// @ts-ignore
import DropLogo from '../../asset/login/logo_b.svg';
// @ts-ignore
import KakaoLogo from '../../asset/login/kakao_logo_brown.svg';
import KakaoLogin from 'react-kakao-login';
import { KAKAO_AUTH_URL, kakao_login_rest_key } from '../../common/env';
// @ts-ignore
import LoginPhone from '../../asset/login/phone mockup@2x.png';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LoginPhoneImg src={LoginPhone} alt='img' />
      </S.Wrapper>
      <S.Content>
        <S.Title data-testid='login_title'>
          나의 어떤 메일을 기록하다, <span>드롭</span>
        </S.Title>
        <S.DropLogo src={DropLogo} alt='drop' />
        <S.LoginTextArea>
          <S.Divider />
          <S.LoginText>간편 로그인</S.LoginText>
          <S.Divider />
        </S.LoginTextArea>
        <KakaoLogin
          token={kakao_login_rest_key}
          onFail={() => {}}
          onSuccess={() => {}}
          render={() => <div style={{ display: 'none' }} />}
        />
        <S.KakaoLoginButton onClick={() => window.open(KAKAO_AUTH_URL)}>
          <S.KakaoLogo className='ml-[12px]' src={KakaoLogo} alt='kakao' />
          카카오톡으로 로그인
          <p />
        </S.KakaoLoginButton>
      </S.Content>
    </S.Container>
  );
};

export default Login;
