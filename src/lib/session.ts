import { IronSessionOptions } from 'iron-session';

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'soccer-bet.io',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: (process.env.NODE_ENV === 'production' ? 'none' : 'lax') as any,
    httpOnly: process.env.NODE_ENV === 'production',
  },
  ttl: 86400,
};
