import { ChakraProvider } from '@chakra-ui/react';
import App from './App.js'

export default function Home() {
  return (
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  );
}