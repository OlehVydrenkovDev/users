import { $host } from './index.js';
import jwt_decode from 'jwt-decode';

export const registration = async (userName, email, password, role) => {
  const { data } = await $host.post('api/auth/registration', {
    email,
    userName,
    password,
    role,
  });

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post('api/auth/signIn', { email, password });
  return jwt_decode(data.token);
};

export const check = async () => {
  const response = await $host.post('api/auth/auth');
  return response;
};

export const fetchUser = async (id) => {
  const userData = await $host.get('api/user/users/' + id);
  return userData;
};
