import Portfolio from "./Portfolio";
import style from "../styles/components/PortfolioContainer.module.css"
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";
const PortfolioContainer = () => {
    const { colors } = useContext(ThemeContext);

    return (
        <div className={style.portfolio_container} style={{backgroundColor: colors.smol_background}}>
            <Portfolio />
        </div>
    )
}

export default PortfolioContainer;