import instance from '@/externalApi/axios';

export interface AuthSignUp {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export const signIn = async (email: string, password: string) => {
  return instance.post<SignInResponse>('auth/login', { email, password });
};

export const signUp = async (data: AuthSignUp) => {
  return instance.post('accounts', data);
};

export const getLoggedInUser = async () => {
  return instance.get('auth/me');
};
