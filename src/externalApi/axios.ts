import axios from 'axios';

import AuthToken from '@/services/AuthToken';
import { AxiosException } from '@/externalApi/AxiosException';

const axiosConfig = {
  baseURL: `${process.env.API_URL}/api/v1/`,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
};

const instance = axios.create(axiosConfig);

const refreshTokenInstance = axios.create(axiosConfig);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (rejection) => {
    if (
      rejection.response &&
      401 === rejection.response.data.statusCode &&
      rejection.response.data.message &&
      'Unauthorized' === rejection.response.data.message
    ) {
      const refreshToken = await AuthToken.getRefreshToken();
      if (refreshToken) {
        const refreshAuthHeader =
          await AuthToken.getRefreshAuthorizationHeader();
        return new Promise((resolve, reject) => {
          refreshTokenInstance
            .post('auth/refresh', null, {
              headers: {
                Authorization: refreshAuthHeader,
              },
            })
            .then(
              async (response) => {
                const cookieString = await AuthToken.setTokens(response.data);
                rejection.config.headers['Authorization'] =
                  AuthToken.getAuthorizationHeader(response.data.accessToken);
                rejection.config.headers['Set-Cookie'] = cookieString;
                resolve(axios(rejection.config));
              },
              (error: Error) => {
                AuthToken.removeToken();
                reject(error);
              },
            );
        });
      }
    }

    if (!rejection.response.data) {
      throw new AxiosException('Something went wrong!', 500);
    }
    throw new AxiosException(
      rejection.response.data.message,
      rejection.response.data.statusCode,
    );
  },
);

instance.interceptors.request.use(async (config) => {
  const authHeader = await AuthToken.getAuthorizationHeader();

  if (!config.headers.hasOwnProperty('Authorization') && authHeader) {
    config.headers['Authorization'] = authHeader;
  }

  return config;
}, Promise.reject);

export default instance;
