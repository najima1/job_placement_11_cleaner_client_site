import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../Firebase/Firebase'

const auth = getAuth(app)
const AuthContext = createContext()


const Context_provider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)



    //create user by email & password
    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user with email & password
    const signInUserEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //user sign out
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // get current user
    // as well as set current user in state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return () => unsubscribe()
    }, [])



    const value = { loading, setLoading, currentUser, createUserEmailPassword, signInUserEmailPassword, signOutUser }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useProvider = () => {
    const context = useContext(AuthContext)
    return context
}

export default Context_provider

