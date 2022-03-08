import React from 'react';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='container.xl' centerContent display="flex" justifyContent="center" h="100vh">
        <Heading size="4xl" as="h1" color="teal.300" textAlign="center" mt="4">React Typescript SPA Starter</Heading>
      </Container>
    </ChakraProvider>
  );
}

export default App;
