import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({element}) => {
    const {isAuthenticated}=useContext(AuthContext);
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
  return element
}

export default ProtectedRouter;
