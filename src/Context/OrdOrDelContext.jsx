import { createContext, useContext } from "react";

export const OrdOrDelContext = createContext({
    ordOrDel: "/Zomiggy/order",  // it is taking route prop from home. "/order" or not.
    changeValue: () => { }
});

export const useOrdOrDel = () => { return useContext(OrdOrDelContext) };
export const OrdOrDelProvider = OrdOrDelContext.Provider;