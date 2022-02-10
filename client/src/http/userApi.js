import { $host, $authHost } from './index.js';
import jwt_decode from 'jwt-decode';

export const registration = async (
  userName,
  email,
  password,
  role,
  profiles
) => {
  const { data } = await $host.post('api/auth/registration', {
    email,
    userName,
    password,
    role,
    profiles,
  });

  localStorage.setItem('token', data.token);

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post('api/auth/signIn', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/auth/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const fetchUser = async (id) => {
  const userData = await $host.get('api/user/users/' + id);
  return userData;
};
