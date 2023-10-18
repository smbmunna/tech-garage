import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //Observe current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])
    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //update userinfo
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }
    //sign in user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logout user
    const logout = () => {
        return signOut(auth);
    }

    const userInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        updateUser,
        logout,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;