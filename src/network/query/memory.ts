import {useInfiniteQuery, useMutation, useQuery} from 'react-query';
import {deleteForEntity, getForEntity, putForEntity} from '../Requests';
import {Memory} from 'types/Memory';
import {Cookies} from "react-cookie";

const memoryKey = 'memory';
const cookies = new Cookies(document.cookie);

export const useGetMemory = () =>
  useQuery({queryKey: [memoryKey], queryFn: (): Promise<Memory[]> => getForEntity('/api/memory', {})});

export const useInfiniteGetMemory = () =>
  useInfiniteQuery({
    queryKey: [memoryKey],
    queryFn: (context): Promise<Memory[]> => {
      return getForEntity('/api/memory', {page: context.pageParam, size: 5});
    },
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages?.length : false; // 다음 페이지를 호출할 때 사용 될 pageParam
    },
  });

export const useEditMemory = (id: number, content: string, then: () => void) =>
  useMutation(() => putForEntity(`/api/memory/{id}`, {content}), {onSuccess: then});

export const useDeleteMemory = (successCallBack: () => void) =>
  useMutation(
    (id: number): Promise<Memory[]> =>
      deleteForEntity(`/api/memory/${String(id)}`, {
        // id: String(id),
      }),
    {onSuccess: successCallBack}
  );
export const postEditMemory = (id: number, conten12t: string, then12: () => void) => {
  const Authorization = cookies.get('accessToken');

  fetch(`/api/memory/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${Authorization}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({content: conten12t})

  }).then((r) => then12())
}
