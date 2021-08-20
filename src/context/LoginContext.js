import { setHeaderToInstance } from './../services/instance';
import { useState, useEffect, useCallback } from 'react';
import { createContext } from 'react';
import { loginService } from 'services';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    } else {
      setToken(false);
    }
  }, []);

  const login = useCallback((...credentials) => {
    return loginService(...credentials)
      .then(({ data: { access_token } }) => {
        setToken(access_token);
        localStorage.setItem('token', access_token);
        setHeaderToInstance('Authorization', `Bearer ${access_token}`);
      })
      .catch(console.error);
  }, []);

  return (
    <LoginContext.Provider value={{ login, token }}>
      {children}
    </LoginContext.Provider>
  );
};
