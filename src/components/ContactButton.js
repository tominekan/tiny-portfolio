"use strict"
import { MdOutlineModeEdit } from "react-icons/md";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import styles from "../styles/Misc.module.css";


const ContactButton = () => {
    const { colors, openContact } = useContext(ThemeContext);
    
    return (
        <button style={{
            color: colors.primary,
            backgroundColor: colors.secondary,
        }}
        className={styles.contact_button}
        onClick={() => openContact()}>
            <MdOutlineModeEdit style={{height: "24px", width: "24px"}}/>
            <p style={{fontWeight: "400px"}}>Contact</p>
        </button>
    )
}

export default ContactButton;