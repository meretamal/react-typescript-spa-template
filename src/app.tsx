import { ChakraProvider } from '@chakra-ui/react';
import Router from './router';

export default function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
