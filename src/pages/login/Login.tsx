import React, { useEffect } from 'react';
import * as S from './Login.style';
// @ts-ignore
import DropLogo from '../../asset/svg/logo_b.svg';
// @ts-ignore
import KakaoLogo from '../../asset/svg/kakao_logo_brown.svg';
import KakaoLogin from 'react-kakao-login';
import { kakao_login_js_key, kakao_login_rest_key, REDIRECT_URI } from '../../common/env';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Login = () => {
  useEffect(() => {
    kakaoLoginInitialSet();
  });
  const kakaoLoginInitialSet = () => {
    if (window.Kakao.isInitialized()) {
      return;
    }
    window.Kakao.init(kakao_login_js_key);
  };

  const onClickKakaoButton = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${REDIRECT_URI}`,
    });
  };

  return (
    <S.Container>
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
        <S.KakaoLoginButton onClick={onClickKakaoButton}>
          <S.KakaoLogo className='ml-[12px]' src={KakaoLogo} alt='kakao' />
          카카오톡으로 로그인
          <p />
        </S.KakaoLoginButton>
      </S.Content>
    </S.Container>
  );
};

export default Login;
