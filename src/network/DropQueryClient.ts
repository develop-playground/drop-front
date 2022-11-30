import { QueryClient } from 'react-query';

const DropQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // @ts-ignore
      refetchOnWindowFocus: false,
      onError: () => alert('queries 에러 발생\n개발자에게 문의하세요'),
    },
    mutations: {
      // @ts-ignore
      onError: () => alert('mutations 에러 발생\n개발자에게 문의하세요'),
    },
  },
});

export default DropQueryClient;
