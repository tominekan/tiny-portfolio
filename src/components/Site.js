import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import PortfolioContainer from "./PortfolioContainer";

const Site = () => {
    const { colors } = useContext(ThemeContext);
    useEffect(() => {
        document.title = "Tiny Portfolio"
    })
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