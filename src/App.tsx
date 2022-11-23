import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import DropQueryClient from './network/DropQueryClient';
import { QueryClientProvider } from 'react-query';

const App = () => {
  return (
    <QueryClientProvider client={DropQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
