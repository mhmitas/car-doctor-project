import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signOutUser() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setLoading(false)
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;