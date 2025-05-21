import React, { use } from 'react';
import { AuthContext } from '../Componants/Context/AuthContext';
import { Navigate } from 'react-router';
import Swal from 'sweetalert2';

const PrivetRout = ({children}) => {

    const {user} = use(AuthContext)

    if(user){
        return children
    } else {
        Swal.fire({
            icon: "error",
            title: 'Please Login First',
        })
        return <Navigate to='/signin'></Navigate>
    }


};

export default PrivetRout;