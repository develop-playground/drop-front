import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import DropQueryClient from './network/DropQueryClient';
import { QueryClientProvider } from 'react-query';
import { GlobalStyle } from './asset/styles/GlobalStyle';
const App = () => {
  return (
    <QueryClientProvider client={DropQueryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
