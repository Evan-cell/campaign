import { Children, createContext } from "react";

export const Globalcontext = createContext(null);

function GlobalState ({children}){
    return <Globalcontext.Provider>{children}</Globalcontext.Provider>
}
export default GlobalState;