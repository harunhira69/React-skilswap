import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider, onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';



const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)



  const provider = new GoogleAuthProvider();
  // sign up google

  const googleSignUp = () => {
    return signInWithPopup(auth, provider)
  }
  // email user create

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // onauth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unsubscribe()
    }
  }, [])

  // logout
  const Logout = () => {
    return signOut(auth)

  }
  // update profile

    const updateProfiles = (user, profileData) => {
  return updateProfile(user, profileData);
}
// sign in

const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}

// Reset Password
const resetPassword = (email)=>{
  return sendPasswordResetEmail(auth, email)
}
 
   




  const authInfo = {
    user,
    setUser,
    googleSignUp,
    createUser,
    loading,
    Logout,
    updateProfiles,
    signIn,
    resetPassword,
    


  }

  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>
};

export default AuthProvider;