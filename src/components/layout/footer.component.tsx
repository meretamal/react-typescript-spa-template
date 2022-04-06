import { Center, Text, Stack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Center p="4">
      <Stack spacing="2" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          React SPA Typescript Starter
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Moisés Retamal
        </Text>
      </Stack>
    </Center>
  );
}
