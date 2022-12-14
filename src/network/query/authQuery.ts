import { useQuery } from 'react-query';
import { getForEntity } from '../Requests';
import AuthKakaoCallbackDto from '../../data/dto/AuthKakaoCallbackDto';

export const useGetApiAuthKakaoCallbackQueryKey = 'useGetApiAuthKakaoCallback';
export const useGetApiAuthKakaoCallback = (code: string, successCallback: (data: AuthKakaoCallbackDto) => void) =>
  useQuery(
    [useGetApiAuthKakaoCallbackQueryKey],
    () => getForEntity<AuthKakaoCallbackDto>('/api/auth/kakao/callback', { code }),
    {
      onSuccess: successCallback,
    }
  );
