import { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export interface HeroProps extends BoxProps {
  children?: ReactNode;
  navbar?: boolean;
}

export function Hero({
  children = null,
  navbar = false,
  ...boxProps
}: HeroProps) {
  return (
    <Box
      {...boxProps}
      sx={{ minHeight: navbar ? 'calc(100vh - 59px)' : '100vh' }}
    >
      {children}
    </Box>
  );
}
