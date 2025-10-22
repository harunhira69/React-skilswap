import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoading] = useState(null)



const provider = new GoogleAuthProvider();
// sign up google

const googleSignUp =()=>{
  return signInWithPopup(auth,provider)
}
// email user create

const createUser = (email,password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
}
// onauth
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser)
   setLoading(false)
 });
 return ()=>{
   unsubscribe()
 }
},[])




  const authInfo = {
    user,
    setUser,
    googleSignUp,
    createUser,
    loading,
    
    
  }

       return <AuthContext value={authInfo}>
       {children}
    </AuthContext>
};

export default AuthProvider;