import { Box } from '@chakra-ui/react';

export const Card = ({ children }) => (
  <Box
    py="8"
    px={{ base: '4', md: '10' }}
    shadow="base"
    rounded={{ sm: 'lg' }}
    background="white"
  >
    {children}
  </Box>
);
