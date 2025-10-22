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
  const [show,setShow] = useState(false)

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const[loginEmail,setLoginEmail] = useState('')



  const provider = new GoogleAuthProvider();
  // sign up google

  const googleSignUp = () => {
      setLoading(true);
    return signInWithPopup(auth, provider)
          .finally(() => setLoading(false));


  }
  // email user create

  const createUser = (email, password) => {
      setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
          .finally(() => setLoading(false));


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
      setLoading(true);
    return signOut(auth)
          .finally(() => setLoading(false));
   
   

  }
  // update profile

    const updateProfiles = (user, profileData) => {
     
  return updateProfile(user, profileData);
        
  
}
// sign in

const signIn = (email,password)=>{
    setLoading(true);
    setLoginEmail(email)
  return signInWithEmailAndPassword(auth, email, password)
        .finally(() => setLoading(false));
}

// Reset Password
const resetPassword = (email)=>{
    setLoading(true);
  return sendPasswordResetEmail(auth, email)
        .finally(() => setLoading(false));
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
    show,
    setShow,
    loginEmail,
    setLoginEmail,
    


  }

 return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
);

};

export default AuthProvider;