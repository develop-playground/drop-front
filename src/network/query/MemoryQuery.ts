import { useMutation } from 'react-query';
import { postForEntity } from '../Requests';

export const usePostApiMemory = (successCallBack: () => void) =>
  useMutation(
    ({
      imageUrls,
      content,
      location,
      address,
    }: {
      imageUrls: string[];
      content: string;
      location: { latitude: number; longitude: number };
      address: string;
    }) => postForEntity('api/memory', { imageUrls, content, location, address }),
    { onSuccess: successCallBack }
  );
