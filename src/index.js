import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 
  renders the app components to the screen must be wrapped in Chakra Provider 
  because i plan on using their ui in the website
  */ 
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
