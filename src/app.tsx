import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './router';

export function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
