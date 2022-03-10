import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box p="4" bgColor="teal.300" boxShadow="md">
      <Text fontSize='lg' fontWeight="bold" color="white">React Typescript SPA Starter</Text>
    </Box>
  );
}
