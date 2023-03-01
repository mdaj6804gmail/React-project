import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import "./firebase";

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setcurrentUser] = useState();
    useEffect(() => {
        const auth = getAuth();
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            setLoading(false);
        });
        return unsubcribe;
    }, []);
    //sinup functions
    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        //update profile
        await updateProfile(auth.currentUser, { displayName: username });
        const user = auth.currentUser;
        setcurrentUser({
            ...user,
        })
    };

    //login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    };
    //logout function
    function logout(email, password) {
        const auth = getAuth();
        return signOut(auth, email, password);
    };
    const value = {
        currentUser,
        signup,
        login,
        logout,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}

        </AuthContext.Provider>
    );
}