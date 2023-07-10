import { createContext, useState } from "react";

export const UserContext = createContext({});

// fullname:{type: String, required: true} ,
// email:{type: String, required: true, unique: true} ,
// username:{ type: String, required: true, unique: true},
// dob:{type: Date, required: true},

export function UserContextProvider({children}){
    const [fullname, setFullname] = useState(null);
    const [email, setEmail] = useState(null);
    const [username,setUsername] = useState(null);
    const [dob, setDob] = useState(null);
    const [currUser,setCurrUser] = useState(null);
    return(
        <UserContext.Provider 
        value={{
                    username,
                    setUsername,
                    currUser,
                    setCurrUser,
                    fullname,
                    setFullname,
                    email,
                    setEmail,
                    dob,
                    setDob
                }}>
            {children}
        </UserContext.Provider>
    )
}