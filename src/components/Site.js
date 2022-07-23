import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import PortfolioContainer from "./PortfolioContainer";

const Site = () => {
    const { colors } = useContext(ThemeContext);
    return (
        <div style={{
            height: "100vh",
            width: "100vw", 
            backgroundColor: colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <PortfolioContainer />
        </div>
    )
}

export default Site;