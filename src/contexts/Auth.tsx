import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: console.log,
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
