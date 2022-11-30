interface AuthKakaoCallbackDto {
  token_type: 'string';
  access_token: 'string';
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

export default AuthKakaoCallbackDto;
