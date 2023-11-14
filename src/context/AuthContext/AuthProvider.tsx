import { JSX, PropsWithChildren, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
