import React from 'react';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box p="4" bgColor="teal.300" boxShadow="md">
      <HStack justify="space-between" align="center">
        <Text fontSize='lg' fontWeight="bold" color="white">React Typescript SPA Starter</Text>
        {colorMode === 'light' ? (
          <MoonIcon color="white" role="button" onClick={toggleColorMode} />
        ) : (
          <SunIcon color="white" role="button" onClick={toggleColorMode}/>
        )}
      </HStack>
    </Box>
  );
}
