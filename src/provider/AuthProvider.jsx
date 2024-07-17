import React, { createContext, useEffect, useState } from 'react'
import {   signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword , updateProfile, signOut } from "firebase/auth";
import { auth } from '../config/firebase.config';
import toast from 'react-hot-toast';
import axios from 'axios';
import useBookings from '../Hooks/useBookings';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [CartItem, setCartItem] = useState([])
    const googleProvider= new GoogleAuthProvider()
    const [isLoading ,setIsloading]= useState(true)
    const [user , setUser]= useState(null)
    // const [ , refetch]=useBookings()

    console.log(user);

    const createUser =(email,password)=>{
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser= (email,password)=>{
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email ,password)
    }

    const updateUser =(name,photo)=>{
        setIsloading(true)
        return  updateProfile(auth.currentUser ,{
            displayName: name, photoURL:photo
        })
    }

    const logOut= ()=>{
        setIsloading(true)
        return signOut(auth)
    }

    const googleLoging=()=>{
        setIsloading(true)
        return signInWithPopup(auth ,googleProvider)
    }

    
   

    useEffect(()=>{
        const subscribtion = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setIsloading(false)
        })
        return ()=>{
            return subscribtion()
          }
    },[])

    const values= {
        isLoading,
        user,
        googleLoging,
        createUser,
        loginUser,
        updateUser,
        logOut,
 
        CartItem,
        // decreaseQty
        
    }

  return (
    <AuthContext.Provider value={values}>
        {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider