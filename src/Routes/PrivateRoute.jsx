import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import GlobalLoader from '../Pages/GlobalLoader';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading)return <GlobalLoader></GlobalLoader>

    if(!user){
    return  <Navigate state={location.pathname} to='/auth/login'>

      </Navigate>
    }

    return children
};

export default PrivateRoute;