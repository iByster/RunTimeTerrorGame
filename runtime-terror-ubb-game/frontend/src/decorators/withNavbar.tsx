import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useAuthContext } from '../providers/AuthProvider/AuthProvider';

export const withNavbar = (WrappedComponent: any) => {
  const WithNavbar: React.FC = () => {
    const { userProfile } = useAuthContext();
    return (
      <>
        <Navbar name={userProfile.username}/>
        <WrappedComponent />
      </>
    );
  };

  return WithNavbar;
};
