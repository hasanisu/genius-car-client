import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const logoutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        updateUserProfile,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;