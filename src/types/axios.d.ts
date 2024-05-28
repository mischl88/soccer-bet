import 'axios';
import { NextApiRequest } from 'next';

declare module 'axios' {
  export interface AxiosRequestConfig {
    nextReq?: NextApiRequest;
  }
}
