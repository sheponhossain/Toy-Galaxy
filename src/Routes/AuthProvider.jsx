import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { app } from '../../Firebase.config';

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

  //   update userProfile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   Resat password
  const resetPassword = (email) => {
    setLoading(true);
    const actionCodeSettings = {
      url: 'http://localhost:5173/login',
      handleCodeInApp: true,
    };
    return sendPasswordResetEmail(auth, email, actionCodeSettings);
  };

  const authInfo = {
    user,
    setUser,
    logOut,
    loading,
    setLoading,
    createNewUser,
    resetPassword,
    singInWithGoogle,
    updateUserProfile,
    singInEmainlPassword,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
