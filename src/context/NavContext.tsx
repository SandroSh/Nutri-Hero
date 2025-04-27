'use client'

import { createContext, useContext, useState } from "react";


type NavContextType = {
    isSignedIn: boolean;
    setIsSignedIn: (value: boolean) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    return <NavContext.Provider value={{ isSignedIn, setIsSignedIn }}>
        {children}
    </NavContext.Provider>

}

export const useNav = () => {
    const context = useContext(NavContext);
    if(!context){
        throw new Error("useNav must be used in sNavProvider")
    }
    return context
}