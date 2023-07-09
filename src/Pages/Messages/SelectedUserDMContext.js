import { createContext, useState } from "react";

export const SelectedDM = createContext({});

export function SelectedDMContextProvider({children}){
    const [selectedUserId,setSelectedUserId] = useState(null)
    return(
        <SelectedDM.Provider 
        value={{
            selectedUserId,
            setSelectedUserId
        }}>
        {children}
        </SelectedDM.Provider>
    )
}

