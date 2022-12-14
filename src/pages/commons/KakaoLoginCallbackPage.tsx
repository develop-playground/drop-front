import React from 'react';
import { Cookies } from 'react-cookie';
import { AuthAtom } from '../../store/authAtom';
import { useSetRecoilState } from 'recoil';
import AuthKakaoCallbackDto from '../../data/dto/AuthKakaoCallbackDto';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cookies = new Cookies(document.cookie);
const KakaoLoginCallbackPage = () => {
  const setAuthAtom = useSetRecoilState(AuthAtom);
  const permissionCode = window.location.search.substring(6);
  const navigate = useNavigate();
  fetch('http://3.34.194.171/api/auth/login', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `Bearer ${permissionCode}`,
    },
    body: JSON.stringify({
      member_type: 'KAKAO',
    }),
  }).then((r) => {
    setAuthAtom(r as unknown as AuthKakaoCallbackDto);
    // @ts-ignore
    setCookiesForAuth(r.access_token, r.refresh_token);
    navigate('/');
  });
  return <div>카카오로 로그인 중...</div>;
};

function setCookiesForAuth(accessToken: string, refreshToken: string) {
  if (accessToken === '' || refreshToken === '') return false;

  cookies.set('accessToken', accessToken, { path: '/', maxAge: 1209600000 });
  cookies.set('refreshToken', refreshToken, { path: '/', maxAge: 1209600000 });

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = false;
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export default KakaoLoginCallbackPage;
