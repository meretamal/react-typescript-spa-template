import { Heading } from '@chakra-ui/react';
import Hero from '../../components/layout/hero.component';

export default function HomePage() {
  return (
    <Hero navbar display="flex" justifyContent="center" alignItems="center">
      <Heading size="4xl" as="h1" color="teal.300" textAlign="center" mt="4">
        React Typescript SPA Starter
      </Heading>
    </Hero>
  );
}
