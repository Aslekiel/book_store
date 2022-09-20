import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

instance.interceptors.request.use((req) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return req;
});
