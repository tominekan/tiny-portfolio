import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Light Color Scheme  }
    const lightMode = {
        isLight: true,
        primary: "#E6EAEC",
        secondary: "#4D616B",
        smol_background: "#E1E7EA",
        text: "#000000",
    }

    // Dark Color scheme
    const darkMode = {
        isLight: false,
        primary: "#4D616B",
        secondary: "#E6EAEC",
        smol_background: "#7E949F",
        text: "#FFFFFF"
    }

    // Defaults to light mode on first load
    const getInitialMode = () => {
        const savedScheme = localStorage.getItem("colorScheme");
        if (savedScheme === "light") {
            return lightMode;
        } else if (savedScheme === "dark") {
            return darkMode;
        } else {
            // Save colorScheme to light
            localStorage.setItem("colorScheme", "light");
            return lightMode;
        }
    } 



      

    // Defaults to light mode (on first load)
    const [colors, setColors] = useState(getInitialMode());
    const [contactShow, setContactShow] = useState(false);

    const changeTheme = () => {
        // Light -> Dark Mode
        if (colors.isLight) {
            setColors(darkMode);
            localStorage.setItem("colorScheme", "dark");
        } else if (colors.isLight === false) { // Dark -> Light Mode
            setColors(lightMode);
            localStorage.setItem("colorScheme", "light");
        }
    };



    return (
        <ThemeContext.Provider value={{colors, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export {ThemeContext, ThemeProvider}