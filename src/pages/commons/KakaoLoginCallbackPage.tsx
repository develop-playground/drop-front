import React from 'react';
import { Cookies } from 'react-cookie';
import { AuthAtom } from '../../store/authAtom';
import { useSetRecoilState } from 'recoil';
import AuthKakaoCallbackDto from '../../data/dto/AuthKakaoCallbackDto';

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
      member_type: 'KAKAO',
    }),
  }).then((r) => {
    setAuthAtom(r as unknown as AuthKakaoCallbackDto);
    console.log(r);
  });
  return <div>카카오로 로그인 중...</div>;
};

export default KakaoLoginCallbackPage;
