import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const instance = axios.create({
  baseURL: REACT_APP_API_URL ?? 'http://api-ml.carrasco.uruit.com/',
});

export const setHeaderToInstance = (param, value) => {
  instance.defaults.headers.common[param] = value;
};
