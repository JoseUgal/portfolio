// ** React utils
import { createContext, useContext, useState } from "react"

// ** Providers
import { ThemeProvider as StyledProvider } from "styled-components"

// ** Themes
import { light, dark } from "../constants/theme"

const Context = createContext({
    message: 'Do not have access to the context.'
})

export const ThemeProvider = ({
    children
}) => {
    const [ theme, setTheme ] = useState(() => {
        if (typeof window !== 'undefined'){
          const storedTheme = localStorage.getItem("@currentTheme")
    
          return (storedTheme === "light") ? "light" : "dark"
        }
        return "light"
    })

    const changeTheme = () => {
        const newTheme = (theme === "light") ? "dark" : "light"
    
        if (typeof window !== 'undefined') {
          localStorage.setItem("@currentTheme", newTheme)
        }
        
        setTheme(newTheme)
    }

    return (
        <Context.Provider value={{
            theme,
            changeTheme
        }}>
            <StyledProvider theme={(theme === "light") ? light : dark}>
                {children}
            </StyledProvider>
        </Context.Provider>
    )
}

export default function useTheme ()  {
    const { theme, changeTheme } = useContext(Context)

    return {
        theme,
        changeTheme
    }
}