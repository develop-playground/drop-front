import React from 'react';

// @ts-ignore
import DropLogo from '../asset/svg/logo_b.svg';
// @ts-ignore
import KakaoLogo from '../asset/svg/kakao_logo_brown.svg';

const Login = () => {
  return (
    <div className='w-full h-full justify-center flex'>
      <div className='w-[360px] h-full flex-col flex flex-shrink-0 justify-center items-center  border-[1px] bottom-solid border-loginGrayColor  pl-[16px] pr-[16px]'>
        <div className='flex gap-2'>
          <p className='text-sm'>나의 어떤 메일을 기록하다,</p>
          <p className='text-sm font-bold'>드롭</p>
        </div>
        <img className='mt-[16px]' src={DropLogo} alt='drop' />

        <div className='w-full h-fit flex gap-1 justify-center items-center mt-[100px]'>
          <div className='min-w-0 h-0.5 grow bg-loginGrayColor' />
          <p className='text-sm text-loginGrayColor'>간편 로그인</p>
          <div className='min-w-0 h-0.5 grow bg-loginGrayColor' />
        </div>

        <div className='w-full h-[44px] mt-[16px] flex justify-between items-center cursor-pointer bg-kakaoYellowColor rounded-md'>
          <img className='ml-[12px]' src={KakaoLogo} alt='kakao' />
          <p>카카오톡으로 로그인</p>
          <p />
        </div>
      </div>
    </div>
  );
};

export default Login;
