import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
