import React from 'react';
import axios from 'axios';
import {Cookies} from 'react-cookie';
import {AuthAtom} from '../../store/authAtom';
import {useSetRecoilState} from 'recoil';

const cookies = new Cookies(document.cookie);
const KakaoLoginCallbackPage = () => {
  const setAuthAtom = useSetRecoilState(AuthAtom);
  const permissionCode = window.location.search.substring(6);

  fetch('http://3.34.194.171/api/auth/login', {
    mode: 'cors',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${permissionCode}`,
    },
    body: JSON.stringify({
      member_type : 'KAKAO'
    })
  }).then((r) => console.log(r));
  return <div>카카오로 로그인 중...</div>;
};

function setCookiesForAuth(idToken: string, refreshToken: string, AuthType: string) {
  if (idToken === 'undefined' || refreshToken === '') return false;

  cookies.set('Authorization', idToken, {path: '/', maxAge: 1209600000});
  cookies.set('RefreshToken', refreshToken, {path: '/', maxAge: 1209600000});
  cookies.set('AuthType', AuthType, {path: '/', maxAge: 1209600000});

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = false;
  axios.defaults.headers.common.Authorization = idToken;
  axios.defaults.headers.common.AuthType = AuthType;
}

export default KakaoLoginCallbackPage;
