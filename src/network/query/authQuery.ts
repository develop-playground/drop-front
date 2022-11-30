import { useQuery } from 'react-query';
import { getForEntity } from '../Requests';
import AuthKakaoCallbackDto from '../../data/dto/AuthKakaoCallbackDto';

export const getApiAuthKakaoCallbackQueryKey = 'getApiAuthKakaoCallback';
export const getApiAuthKakaoCallback = (code: string, successCallback: (data: AuthKakaoCallbackDto) => void) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useQuery(
    [getApiAuthKakaoCallbackQueryKey],
    () => getForEntity<AuthKakaoCallbackDto>('/api/auth/kakao/callback', { code }),
    {
      onSuccess: successCallback,
    }
  );