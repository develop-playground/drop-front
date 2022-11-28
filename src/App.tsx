import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import DropQueryClient from './network/DropQueryClient';
import { QueryClientProvider } from 'react-query';
import { GlobalStyle } from './asset/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './asset/styles/theme';

const App = () => {
  return (
    <QueryClientProvider client={DropQueryClient}>
  		<ThemeProvider theme={theme}>     
 			<GlobalStyle />	
      		<RouterProvider router={router} />
 		</ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
