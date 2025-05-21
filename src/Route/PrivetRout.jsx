import React, { use } from 'react';
import { AuthContext } from '../Componants/Context/AuthContext';
import { Navigate } from 'react-router';

const PrivetRout = ({children}) => {

    const {user} = use(AuthContext)

    if(user){
        return children
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivetRout;