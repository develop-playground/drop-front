interface AuthKakaoCallbackDto {
  access_token: 'string';
  access_token_expire_time: number;
  refresh_token: string;
  refresh_token_expire_time: string;
}

export default AuthKakaoCallbackDto;
