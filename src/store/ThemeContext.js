import React, { createContext } from 'react'
import { useState } from 'react'


const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    if(!localStorage.getItem("theme")) {
        localStorage.setItem("theme",false)
    }
    const [theme,setTheme] = useState(

        JSON.parse(localStorage.getItem("theme")) 
        

    )

    return <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContext;