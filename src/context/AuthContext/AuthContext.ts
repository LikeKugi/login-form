import { createContext, useContext } from 'react';

interface IAuth {
  isLoggedIn: boolean,
  login: () => void,
  logout: () => void,
}

export const AuthContext = createContext<IAuth>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext);
