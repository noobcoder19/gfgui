import firebase from "firebase";
import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export const userContext = createContext<firebase.User | null>(null);

interface IProps{
    children: React.ReactNode;
}

export default function UserProvider(props: IProps) {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseuser) => {
            //setLoading(true);
            setUser(firebaseuser);
            setLoading(false);
        })
    }, [])
    
    return(
        <userContext.Provider value={user}>
            {isLoading && <LoadingSpinner />}
            {!isLoading && props.children}
        </userContext.Provider>
    )
}