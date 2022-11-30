import React, { useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { kakao_login_rest_key, REDIRECT_URI } from '../../common/env';

const cookies = new Cookies(document.cookie);
const KakaoLoginCallbackPage = () => {
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
        // UserApi.getMainUserDetail()
        //   .then(response => {
        //     authStore.loginUser(response);
        //     navigate('/');
        //   })
        //   .catch(err => {
        //     const { code } = err;
        //     if (code === 'UserNotExistsException') {
        //       alert('가입되지 않은 정보 입니다. \n모바일을 통해 가입해주세요.');
        //       navigate('/');
        //     } else if (code === 'UserIsSleepingException' || code === 'USER_IS_BLOCKED') {
        //       authStore.setIsDormant(true);
        //     } else {
        //       authStore.logout();
        //       modalStore.openError(err);
        //     }
        //   });
      });
  }, []);
  return <div></div>;
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