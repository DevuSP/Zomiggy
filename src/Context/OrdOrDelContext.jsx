import { createContext, useContext } from "react";

export const OrdOrDelContext = createContext({
    ordOrDel: "",  // it is taking route prop from home. "/dining" or not.
    changeValue: () => { }
});

export const useOrdOrDel = () => { return useContext(OrdOrDelContext) };
export const OrdOrDelProvider = OrdOrDelContext.Provider;