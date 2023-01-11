import {useMutation, useQuery} from 'react-query';
import {getForEntity, putForEntity} from '../Requests';
import {Memory} from 'types/Memory';

const memoryKey = 'memory';

export const useGetMemory = () =>
  useQuery({queryKey: [memoryKey], queryFn: (): Promise<Memory[]> => getForEntity('/api/memory', {})});


export const useEditMemory = (id: number, content: string, then: () => void) => useMutation(() => putForEntity(`/api/memory/{id}`, {content}),{onSuccess:then})