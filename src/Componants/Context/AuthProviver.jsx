import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase_init';

const AuthProviver = ({children}) => {

    const [user, setUser] = useState({})
    console.log(user);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(updated)=>{
        return updateProfile(auth.currentUser, updated)
    }

    const login =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])
    
    const userInfo = {
        createUser,
        user,
        setUser,
        updateUser,
        logOut,
        login
    }

    return (
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
    )
};

export default AuthProviver;