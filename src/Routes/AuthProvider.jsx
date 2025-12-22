import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../../Firebase.config';
import { create } from 'framer-motion/m';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const gogolePorvider = new GoogleAuthProvider();

  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('AuthProvider user state:', user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log('Current User Status:', currentUser);
    });
    return () => unsubscribe();
  }, []);

  //   Sign In with Email and Password
  const singInEmainlPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Sing In with Google

  const singInWithGoogle = () => {
    return signInWithPopup(auth, gogolePorvider);
  };

  //   Sign Out
  const logOut = () => {
    return signOut(auth);
  };

  //   new user creation
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    logOut,
    loading,
    setLoading,
    createNewUser,
    singInWithGoogle,
    singInEmainlPassword,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
