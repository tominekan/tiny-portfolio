"use strict"
import style from "../styles/components/Portfolio.module.css";
import ThemeSwitch from "./ThemeSwitch";
import ContactButton from "./ContactButton";
import ContactForm from "./ContactForm";
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";

// Images
import imageLight from "../assets/PHOTO_LIGHT.png";
import imageDark from "../assets/PHOTO_DARK.png";

const Portfolio = () => {
    const { colors } = useContext(ThemeContext);

    return (
        <div className={style.portfolio_container}>
            <ThemeSwitch />
            <div className={style.portfolio}>
                <div className={style.image_container}>
                    <img
                    src={(colors.isLight) ? imageLight : imageDark}
                    alt="Portrait of Me"
                    className={style.portfolio_image}/>
                </div>
                <div className={style.text_container} style={{color: colors.text}}>
                    <h1>Tomi Adenekan</h1>
                    <p>
                        I'm a high school student who enjoys coding and vibin'. 
                        I'm currently getting into hackathons, blogging, freelancing, 
                        and hand-crafting website designs. I don't have any specific passions within coding,
                        but want to learn as much as possible. My grades are passable 
                        (by my partway-perfectionist standards), and I consider myself decently athletic.
                    </p>
                    <br />
                    <small>2022 @ Tomi Adenekan</small>
                </div>
            </div>
            <ContactButton />
            <ContactForm />
        </div>
    )
}

export default Portfolio;