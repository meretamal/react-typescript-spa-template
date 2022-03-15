import React from 'react';
import { Box, HStack, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p="4" boxShadow={colorMode === 'light' ? 'md' : 'none'}>
      <HStack justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold" color="teal.300">
          React Typescript SPA Starter
        </Text>
        {colorMode === 'light' ? (
          <MoonIcon
            color="gray.300"
            role="button"
            boxSize="1.2em"
            onClick={toggleColorMode}
          />
        ) : (
          <SunIcon
            color="gray.300"
            role="button"
            boxSize="1.2em"
            onClick={toggleColorMode}
          />
        )}
      </HStack>
    </Box>
  );
}
