import { instance } from './instance';

export const loginService = (username, password) => {
  const body = new URLSearchParams();
  body.set('username', username);
  body.set('password', password);
  return instance.post('/login', body, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};
