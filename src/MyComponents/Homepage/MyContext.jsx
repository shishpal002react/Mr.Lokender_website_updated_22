import React, {createContext, useState} from "react";

export const MyContext = createContext();

export const MyContext2 = ({children})=>{
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    return (
        <MyContext.Provider
            value={{show, setShow, hide, setHide}}
        >
            {children}
        </MyContext.Provider>
    )
}
