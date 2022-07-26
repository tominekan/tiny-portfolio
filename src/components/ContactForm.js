import React, { useContext } from 'react';
import styles from "../styles/components/ContactForm.module.css";
import {MdOutlineAccountCircle, MdOutlineEmail, MdTextFormat, MdOutlineArrowBack} from "react-icons/md";
import { ThemeContext } from '../ThemeContext';
import SendButton from './SendButton';

const ContactForm = () => {
    const { colors, contactShow, closeContact, mailData, setMailData } = useContext(ThemeContext)
    const dynamicStyle = {
        color: colors.secondary,
        border: ("2px solid" + colors.secondary),
    }

    const iconStyle = {
        color: colors.secondary,
        height: "24px",
        width: "24px",
        marginRight: "20px"
    }

    const modalColor = {
        backgroundColor: colors.contact_background
    }

    return (
        <div className={styles.dark_background} style={{display: (contactShow) ? "block" : "none",}}>
            <div className={styles.modal} style={modalColor}>
            <div className={styles.modal_title}>
                <MdOutlineArrowBack 
                style={{color: colors.secondary,height: "24px", width: "24px", marginRight: "15px", marginLeft: "15px"}}
                onClick={() => closeContact()}/>
                <h2 style={{color: colors.secondary}}>Contact Me</h2>
            </div>
                <div className={styles.form}>
                    <div className={styles.text_container}>
                        <MdOutlineAccountCircle style={iconStyle}/>
                        <div className={styles.textfield}>
                            <input
                            type="email"
                            placeholder='Name'
                            className={styles.smol_input}
                            style={dynamicStyle}
                            value={mailData.name}
                            onChange={(e) => setMailData({
                                ...mailData,
                                name: e.target.value
                            })}></input>
                        </div>
                    </div>
                    <div className={styles.text_container}>
                        <MdOutlineEmail style={iconStyle}/>
                        <div className={styles.textfield}>
                            <input
                            type="text"
                            placeholder='Email'
                            className={styles.smol_input}
                            style={dynamicStyle}
                            value={mailData.email}
                            onChange={(e) => setMailData({
                                ...mailData,
                                email: e.target.value,
                            })}></input>
                        </div>
                    </div>
                    <div className={styles.text_container}>
                        <MdTextFormat style={iconStyle}/>
                        <div className={styles.textfield_big}>
                            <textarea
                            placeholder='Message'
                            className={styles.big_input}
                            style={dynamicStyle}
                            value={mailData.message}
                            onChange={(e) => setMailData({
                                ...mailData,
                                message: e.target.value,
                            })}> 
                            </textarea>
                        </div>
                    </div>
                </div>
                <SendButton />
            </div>
        </div>
    )
}

export default ContactForm;