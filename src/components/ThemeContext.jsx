import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => {},
});

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'light');
    }
    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };