import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Center sx={{ minHeight: 'calc(100vh - 59px)' }}>
      <Heading size="4xl" as="h1" color="teal.300" textAlign="center" mt="4">
        React Typescript SPA Starter
      </Heading>
    </Center>
  );
}
