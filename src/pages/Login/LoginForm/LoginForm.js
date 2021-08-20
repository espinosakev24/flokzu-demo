import {
  Container,
  Text,
  FormControl,
  Button,
  Stack,
  Grid,
} from '@chakra-ui/react';
import { Card, DividerWithText, Field } from 'components';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const loginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className="loginContainer"
    >
      <Grid width="md">
        <Text fontSize="4xl" fontWeight="extrabold" align="center">
          Form Demo
        </Text>
        <Grid mb="4">
          <DividerWithText>
            <Text
              as="span"
              fontSize="md"
              fontWeight="medium"
              textAlign="center"
              verticalAlign="medium"
            >
              Authorize to use API
            </Text>
          </DividerWithText>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <Stack spacing={4}>
              <Field
                name="username"
                error={formik.errors.username}
                touched={formik.touched.username}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <Field
                name="password"
                type="password"
                error={formik.errors.password}
                touched={formik.touched.password}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <FormControl id="login-button">
                <Button type="submit" isFullWidth colorScheme="purple">
                  Login
                </Button>
              </FormControl>
            </Stack>
          </Card>
        </form>
      </Grid>
    </Container>
  );
};
