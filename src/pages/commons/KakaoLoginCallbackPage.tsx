import React, { useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { kakao_login_rest_key, REDIRECT_URI } from '../../common/env';
import { AuthAtom } from '../../store/authAtom';
import { useSetRecoilState } from 'recoil';
import { getApiAuthKakaoCallback } from '../../network/query/authQuery';
import AuthKakaoCallbackDto from '../../data/dto/AuthKakaoCallbackDto';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies(document.cookie);
const KakaoLoginCallbackPage = () => {
  const navigate = useNavigate();
  const setAuthAtom = useSetRecoilState(AuthAtom);

  useEffect(() => {
    const permissionCode = window.location.search.substring(6);

    const data = {
      grant_type: 'authorization_code',
      client_id: `${kakao_login_rest_key}`,
      redirect_uri: `${REDIRECT_URI}`,
      code: permissionCode,
    };

    const queryStringBody = Object.keys(data)
      // @ts-ignore
      .map((k) => `${encodeURIComponent(k)}=${encodeURI(data[k])}`)
      .join('&');

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: queryStringBody,
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (!res) {
          return;
        }
        if (!res.access_token || !res.refresh_token) return false;
        setCookiesForAuth(res.access_token, res.refresh_token, 'KAKAO');
        try {
          getApiAuthKakaoCallback(res, (value: AuthKakaoCallbackDto) => {
            setAuthAtom(value);
            navigate('/');
          });
        } catch (error) {
          alert(error);
        }
      });
  }, []);
  return <div>카카오로 로그인 중...</div>;
};

function setCookiesForAuth(idToken: string, refreshToken: string, AuthType: string) {
  if (idToken === 'undefined' || refreshToken === '') return false;

  cookies.set('Authorization', idToken, { path: '/', maxAge: 1209600000 });
  cookies.set('RefreshToken', refreshToken, { path: '/', maxAge: 1209600000 });
  cookies.set('AuthType', AuthType, { path: '/', maxAge: 1209600000 });

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = false;
  axios.defaults.headers.common.Authorization = idToken;
  axios.defaults.headers.common.AuthType = AuthType;
}

export default KakaoLoginCallbackPage;
