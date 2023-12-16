import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
    const [user, setUser] =useState([]);

  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   
  };
  const LogInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = ()=>{
    return signInWithPopup(auth,googleProvider)
  }
  // Get the currently signed-in user
        useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user);
                  console.log(user)
                 });

    return () => unSubscribe;
  }, []);

  const authentication = {
    signUpWithEmailAndPassword,
    LogInWithEmailAndPassword,
    googleLogin,
    user
  };
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
