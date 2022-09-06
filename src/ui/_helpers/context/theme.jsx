import { createContext } from "react";

export const theme = {
    color: {
        first: 'orange',
        second: 'green',
    }
}

export const ThemeContext = createContext(theme.color.first);