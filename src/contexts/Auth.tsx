import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { CognitoUser } from 'amazon-cognito-identity-js';

export interface AuthContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const useAuthContext = (): AuthContextType => {
  const context = useContext<AuthContextType>(AuthContext);
  if (context === undefined) {
    throw new Error(
      'useAuthContext must be used within a AuthContext.Provider',
    );
  }

  return context;
};
