import { MdOutlineSend } from "react-icons/md";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import styles from "../styles/Misc.module.css";
import sendEmail from "../SendEmail.mjs";

const SendButton = () => {
    const { colors, closeContact, mailData } = useContext(ThemeContext);
    const  ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

    const validateContent = () => {
        if (mailData.email.trim() && mailData.name.trim() && mailData.message.trim()) {
            sendEmail(mailData.name, mailData.email, mailData.message, ACCESS_TOKEN);
            closeContact();
        } else {
            alert("Please fill out the form.")
        }
    }

    return (
        <button style={{
            color: colors.primary,
            backgroundColor: colors.secondary,
        }}
        className={styles.send_button}
        onClick={() => validateContent()}>
            <MdOutlineSend style={{height: "24px", width: "24px"}}/>
            <p style={{fontWeight: "400px"}}>Send</p>
        </button>
    )
}

export default SendButton;