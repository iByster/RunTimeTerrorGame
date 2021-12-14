import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Login from '../components/login/Login';
import { useAuthContext } from '../providers/AuthProvider/AuthProvider';
import { AccessDenied } from './AccessDenied';

interface Props {
    component: React.ComponentType
    path?: string
}

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const { userProfile } = useAuthContext();
    const { token } = userProfile;

    if (token) {
      return <RouteComponent />
    } else {
        return <AccessDenied />
    }

  }

export default PrivateRoute;
