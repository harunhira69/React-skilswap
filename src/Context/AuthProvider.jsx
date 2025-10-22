import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider, onAuthStateChanged,
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
 
   




  const authInfo = {
    user,
    setUser,
    googleSignUp,
    createUser,
    loading,
    Logout,
    updateProfiles
    


  }

  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>
};

export default AuthProvider;