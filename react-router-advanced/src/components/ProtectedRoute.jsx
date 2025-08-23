import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'



function useAuth() {
    const [isAuthenticated] = React.useState(true);
    return isAuthenticated;    
}

function ProtectedRoute() {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
  return (
    <Outlet />
  );
}

export default ProtectedRoute
export {useAuth};