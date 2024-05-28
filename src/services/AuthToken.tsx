import { cookies } from 'next/headers';

import { sealData, unsealData } from 'iron-session/edge';

import { sessionOptions } from '@/lib/session';
import { SignInResponse } from '@/externalApi/auth';

export interface CookieData {
  accessToken: string;
  refreshToken: string;
}

class AuthToken {
  static isAuthenticated() {
    return null !== this.getRefreshToken();
  }

  static async getAccessToken() {
    const cookie = await AuthToken.getCookie();

    return cookie?.accessToken;
  }

  static async getRefreshToken() {
    const cookie = await AuthToken.getCookie();

    return cookie?.refreshToken;
  }

  static async getAuthorizationHeader(newToken?: string) {
    const accessToken = await this.getAccessToken();
    if (!accessToken && !newToken) {
      return;
    }

    return `Bearer ${newToken ?? accessToken}`;
  }

  static async getRefreshAuthorizationHeader() {
    const refreshToken = await this.getRefreshToken();
    if (!refreshToken) {
      return;
    }

    return `Bearer ${refreshToken}`;
  }

  static removeToken(): void {
    const cookieStore = cookies();
    cookieStore.delete(sessionOptions.cookieName);
  }

  static async setTokens(data: SignInResponse) {
    const session = JSON.stringify(data);
    const encryptedSession = await sealData(session, {
      password: sessionOptions.password,
    });

    return `${sessionOptions.cookieName}=${encryptedSession}`;
  }

  private static async getCookie(): Promise<CookieData | null> {
    const cookieStore = cookies();
    const encryptedSession = cookieStore.get(sessionOptions.cookieName)?.value;

    if (encryptedSession) {
      const data = await unsealData(encryptedSession, {
        password: sessionOptions.password,
      });

      try {
        return JSON.parse(data.toString());
      } catch {
        return null;
      }
    }

    return null;
  }
}

export default AuthToken;
