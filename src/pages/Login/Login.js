import { useContext } from 'react';
import { LoginForm } from './LoginForm';
import { useHistory } from 'react-router-dom';
import { LoginContext } from 'context';

export const Login = () => {
  const history = useHistory();
  const { login } = useContext(LoginContext);

  const handleSubmit = ({ username, password }) => {
    login(username, password).then(() => history.push('/content'));
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
