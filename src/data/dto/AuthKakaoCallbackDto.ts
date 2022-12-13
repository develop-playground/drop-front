interface AuthKakaoCallbackDto {
  accessToken: 'string';
  accessTokenExpireTime: number;
  refreshToken: string;
  refreshTokenExpireTime: string;
}

export default AuthKakaoCallbackDto;
