import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProviver = ({children}) => {

    const friends = ['sf','sfthtr','euwfheufh', 'auth is my friend']
    const userInfo = {
        friends
    }

    return (
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
    )
};

export default AuthProviver;