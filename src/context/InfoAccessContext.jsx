import { createContext, useState } from "react";

export const InfoAccessContext = createContext(null);

export default function InfoAccessProvider({children}) {
    const [hover, setHover] = useState(false);
    
    function toggleHover() {
        setHover((prevState) => !prevState)
    }
    return (
        <InfoAccessContext.Provider value={{hover, toggleHover, setHover}}>
            {children}
        </InfoAccessContext.Provider>
    )
}