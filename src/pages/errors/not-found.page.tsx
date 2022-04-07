import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Hero } from '@/components/layout/hero.component';

export function NotFoundPage() {
  return (
    <Hero navbar display="flex" justifyContent="center" alignItems="center">
      <Stack spacing="3" align="center">
        <Heading size="4xl" as="h1" textAlign="center">
          <Box as="span" color="teal.300">
            404
          </Box>{' '}
          Error
        </Heading>
        <Text fontSize="3xl" textAlign="center">
          The page you are looking for does not exist
        </Text>
        <Link as={RouterLink} to="/" fontSize="20">
          Go to home
        </Link>
      </Stack>
    </Hero>
  );
}
