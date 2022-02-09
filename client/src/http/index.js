import axios from 'axios';

export const $host = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const $authHost = axios.create({
  baseURL: 'http://localhost:5000/',
});

const authInterceptor = (config) => {
  config.headers.autorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);
