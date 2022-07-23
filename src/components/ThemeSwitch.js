import Switch from "react-switch";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import styles from "../styles/Misc.module.css";

const ThemeSwitch = () => {

    const {colors, changeTheme} = useContext(ThemeContext);

    return (
        <label className={styles.toggle_switch}>
            <Switch
            onChange={() => changeTheme()}
            checked={colors.isLight}
            onColor="#4D616B"
            offColor="#E6EAEC"
            offHandleColor="#4D616B"
            onHandleColor="#E6EAEC"
            checkedIcon={<MdOutlineLightMode style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "80%", color: "#E6EAEC"}}/>}
            uncheckedIcon={<MdOutlineDarkMode style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "80%"}}/>}/>
        </label>
    )
}

export default ThemeSwitch;