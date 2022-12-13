import React from 'react';
import { RouterProvider, useNavigate } from 'react-router-dom';
import router from './Router';
import DropQueryClient from './network/DropQueryClient';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <QueryClientProvider client={DropQueryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
