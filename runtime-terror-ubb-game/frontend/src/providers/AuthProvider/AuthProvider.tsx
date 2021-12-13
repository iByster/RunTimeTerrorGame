import { createContext, useContext, useState } from 'react';

interface UserProfileInterface {
  username: string;
  token: string;
}
interface AuthContextInterface {
  userProfile: UserProfileInterface;
  login(userProfile: UserProfileInterface): void;
  logout(): void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider: React.FC = ({ children }) => {
  // const [accessToken, setAccessToken] = useState();
  const [userProfile, setUserProfile] = useState<UserProfileInterface>({
    username: localStorage.getItem('userProfile') || '',
    token: localStorage.getItem('token') || '',
  });

  function login(userProfile: UserProfileInterface) {
    setUserProfile(userProfile);
    console.log(userProfile);
    localStorage.setItem('userProfile', userProfile.username);
    localStorage.setItem('token', userProfile.token);
    console.log(`user: ${userProfile.username} logged in ${userProfile}`);
  }

  function logout() {
    setUserProfile({
      username: '',
      token: '',
    });
    localStorage.removeItem('userProfile');
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{ userProfile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
