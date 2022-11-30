import { atom } from 'recoil';
import AuthKakaoCallbackDto from '../data/dto/AuthKakaoCallbackDto';

export const AuthAtom = atom<AuthKakaoCallbackDto>({
  key: 'authAtom',
  default: undefined,
});
