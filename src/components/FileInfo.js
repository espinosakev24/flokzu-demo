import React from 'react';

import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
} from '@chakra-ui/react';

export const FileInfo = ({ fileData: { name, fileSize, type } }) => {
  return (
    <Box
      borderBottom="1px"
      borderColor="gray.200"
      padding="5"
      pb="1"
      marginBottom="5"
    >
      {name ? (
        <Stat>
          <StatLabel>{name}</StatLabel>
          <StatNumber>{fileSize}</StatNumber>
          <StatHelpText>{type}</StatHelpText>
        </Stat>
      ) : (
        <Text
          as="span"
          fontSize="md"
          fontWeight="bold"
          textAlign="center"
          verticalAlign="medium"
          color="gray.500"
        >
          No file selected
        </Text>
      )}
    </Box>
  );
};
