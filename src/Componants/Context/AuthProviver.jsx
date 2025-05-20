import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase_init';

const AuthProviver = ({children}) => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    console.log(user);

    const provider = new GoogleAuthProvider()

    const createUser =(email, password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(updated)=>{
        return updateProfile(auth.currentUser, updated)
    }

    const login =(email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginByGoogle =()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut =()=>{
        return signOut(auth)
    }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])
    
    const userInfo = {
        createUser,
        user,
        setUser,
        updateUser,
        logOut,
        login,
        isLoading,
        loginByGoogle
    }

    return (
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
    )
};

export default AuthProviver;