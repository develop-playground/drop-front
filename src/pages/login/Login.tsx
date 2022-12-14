import React from 'react';
import * as S from './Login.style';
import DropLogo from '../../asset/svg/i_logo_b.svg';
import KakaoLogo from '../../asset/svg/i_kakao_logo_brown.svg';
import KakaoLogin from 'react-kakao-login';
import { KAKAO_AUTH_URL, kakao_login_rest_key } from '../../common/env';
import LoginPhone from '../../asset/login/png/login_phone.png';

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
        <a href={KAKAO_AUTH_URL}>
          <S.KakaoLoginButton>
            <S.KakaoLogo className='ml-[12px]' src={KakaoLogo} alt='kakao' />
            카카오톡으로 로그인
            <p />
          </S.KakaoLoginButton>
        </a>
      </S.Content>
    </S.Container>
  );
};

export default Login;
