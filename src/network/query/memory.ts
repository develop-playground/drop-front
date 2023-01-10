import { useQuery } from 'react-query';
import { getForEntity } from '../Requests';
import { Memory } from 'types/Memory';
const memoryKey = 'memory';

export const useGetMemory = () =>
  useQuery({ queryKey: [memoryKey], queryFn: (): Promise<Memory[]> => getForEntity('/api/memory', {}) });
