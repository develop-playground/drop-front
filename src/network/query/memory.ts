import { useQuery } from 'react-query';
import axios from 'axios';
const memoryKey = 'memory';

const getMemory = async () =>
  await axios.get('http://localhost:3000/_mock/memory.json').then((res) => {
    return res.data;
  });

export const useGetMemory = () => useQuery({ queryKey: [memoryKey], queryFn: () => getMemory() });
