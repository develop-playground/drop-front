import React, {useEffect} from 'react';
import {Cookies} from 'react-cookie';
import {AuthAtom} from '../../store/authAtom';
import {useSetRecoilState} from 'recoil';
import AuthKakaoCallbackDto from '../../data/dto/AuthKakaoCallbackDto';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const superAccessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJhdWQiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE2Njk4NTMxMjYsImV4cCI6MzMyMDU4NTMxMjZ9.lYwBcQBRr12EpxoE31i0AzFWUWk2Zeo4i6j7Psocl5jbLxBZJMgH-eLCk14JvKpZTzFkoz2TjYPXJigRjW62vg';

const superRefreshToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSRUZSRVNIIiwiYXVkIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjY5ODUzMTI2LCJleHAiOjMzMjA1ODUzMTI2fQ.sTVM0NG_KIF9xZGDsQf0iXCvIghIiPglqpDIszGftMmpdo9K4jJ_KASr9P9Qll0wtN30d1ZROFZ3JALzUTE_Rw';
const cookies = new Cookies(document.cookie);
const KakaoLoginCallbackPage = () => {
  const setAuthAtom = useSetRecoilState(AuthAtom);
  const permissionCode = window.location.search.substring(6);
  const navigate = useNavigate();

  useEffect(() => {
    if (permissionCode) {
      getAuthToken().then((r) => {
        alert('완료')
        setAuthAtom(r as unknown as AuthKakaoCallbackDto);
        // @ts-ignore
        setCookiesForAuth(r.accessToken, r.refreshToken);
        navigate('/');
      })
        .catch((e) => alert(e.name));
    }
  }, [permissionCode])


  const getAuthToken = async () => {
    await axios('http://3.34.194.171/api/auth/kakao/callback', {
      method: 'GET',
      params: {code: `${permissionCode}`}
    })
  }

  return <div>카카오로 로그인 중...</div>;
};

function setCookiesForAuth(accessToken: string, refreshToken: string) {
  console.log(accessToken);
  if (accessToken === '' || refreshToken === '' || !accessToken || !refreshToken) {
    return alert('로그인에 실패하였습니다. ');
  }

  cookies.set('accessToken', accessToken, {path: '/', maxAge: 1209600000});
  cookies.set('refreshToken', refreshToken, {path: '/', maxAge: 1209600000});

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = false;
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export default KakaoLoginCallbackPage;
