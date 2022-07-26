"use strict"
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
        contact_background: "#BEC8CE",
    }

    // Dark Color scheme
    const darkMode = {
        isLight: false,
        primary: "#4D616B",
        secondary: "#E6EAEC",
        smol_background: "#7E949F",
        text: "#FFFFFF",
        contact_background: "#354A53",
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

    // Controls if the contact button is shown
    const [contactShow, setContactShow] = useState(false);

    // Content of Mail
    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        message: ""
    })

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

    const openContact = () => {
        setContactShow(true)
    }

    // Close Contact haha (bum-ass joke)
    const closeContact = () => {
        setContactShow(false)
    }

    return (
        <ThemeContext.Provider value={{colors, changeTheme, contactShow, openContact, closeContact, mailData, setMailData}}>
            {children}
        </ThemeContext.Provider>
    )
};

export {ThemeContext, ThemeProvider}