import initializeFirebaseApp from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebaseApp();

const useFirebase = () => {

    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const logInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    }

    const gitHubSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, gitHubProvider)

        return signInWithPopup(auth, gitHubProvider);

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };


    return {
        logInWithGoogle, user, error, handleLogout, setUser,
        isLoading,
        setIsLoading, gitHubSignIn
    }
}
export default useFirebase;