
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }
    }, []);

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const info = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;