import React from 'react';
import * as S from './Login.style';
// @ts-ignore
import DropLogo from '../../asset/svg/logo_b.svg';
// @ts-ignore
import KakaoLogo from '../../asset/svg/kakao_logo_brown.svg';

const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          나의 어떤 메일을 기록하다, <span>드롭</span>
        </S.Title>
        <S.DropLogo src={DropLogo} alt='drop' />
        <S.LoginTextArea>
          <S.Divider />
          <S.LoginText>간편 로그인</S.LoginText>
          <S.Divider />
        </S.LoginTextArea>

        <S.KakaoLoginButton>
          <S.KakaoLogo className='ml-[12px]' src={KakaoLogo} alt='kakao' />
          카카오톡으로 로그인
          <p />
        </S.KakaoLoginButton>
      </S.Content>
    </S.Container>
  );
};

export default Login;
