import axios from 'axios';

import { HttpException } from '@/lib/HttpException';

const instance = axios.create({
  baseURL: process.env.APP_URL,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (rejection) => {
    if (!rejection.response.data) {
      throw new HttpException('Something went wrong!', 500);
    }
    throw new HttpException(
      rejection.response.data.message || 'Something went wrong!',
      rejection.response.data.statusCode,
    );
  },
);

export default instance;
