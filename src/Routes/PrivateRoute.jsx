import React from 'react'
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, isLoading } = useAuth();
    console.log(user);
    const location = useLocation()
    console.log(location);
    if (isLoading) {
      <progress className="progress w-56"></progress>;
    }
  
  
    if(!isLoading &&  !user?.email){
      return <Navigate to='/login' state={location.pathname} replace />
  
         
    }
  
    return children
}

export default PrivateRoute