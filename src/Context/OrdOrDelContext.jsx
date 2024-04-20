import { createContext, useContext } from "react";



export const OrdOrDelContext = createContext({
    ordOrDel: "",  // it is taking route prop from home. "/dining" or not.
    changeValue: () => { },
    loggedIn: false,
    changeLoggedIn: () => { },  // App.jsx has these function defined. define them where context provider is set.
    userId: "Guest",
    changeUserId: () => { },
    isMobile: Boolean,
    changeIsMobile: () => { }  // (window.innerWidth < 800) ? mobile : desktop.
});

export const useOrdOrDel = () => { return useContext(OrdOrDelContext) };
export const OrdOrDelProvider = OrdOrDelContext.Provider;