import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { capitalize } from 'helpers';

export const Field = ({
  name,
  type = 'text',
  error,
  touched,
  value,
  onChange,
}) => (
  <FormControl isInvalid={error && touched}>
    <FormLabel>{capitalize(name)}</FormLabel>
    <Input name={name} type={type} value={value} onChange={onChange} />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);
