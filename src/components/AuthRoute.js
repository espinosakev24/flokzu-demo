import { useContext } from 'react';
import { LoginContext } from 'context';
import { Route, Redirect } from 'react-router-dom';

export const AuthRoute = props => {
  const { token } = useContext(LoginContext);

  if (token === undefined) {
    return 'Loading...';
  }

  if (token === false) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};
