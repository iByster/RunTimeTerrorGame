import { createContext, useContext, useState } from 'react';

interface UserProfileInterface {
    username: string;
}
interface AuthContextInterface {
    userProfile?: UserProfileInterface;
    login(userProfile: UserProfileInterface): void;
    logout(): void;
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export function useAuthContext() {
    return useContext(AuthContext);
}

export const AuthContextProvider: React.FC = ({ children }) => {
    // const [accessToken, setAccessToken] = useState();
    const [userProfile, setUserProfile] = useState<UserProfileInterface | undefined>(undefined);

    function login(userProfile: UserProfileInterface) {
        setUserProfile(userProfile);
        localStorage.setItem('userProfile', userProfile.username);
        console.log(`user: ${userProfile.username} logged in ${userProfile}`);
    }

    function logout() {
        setUserProfile(undefined);
        localStorage.removeItem('userProfile')
    }

    return (
        <AuthContext.Provider value={{userProfile, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}