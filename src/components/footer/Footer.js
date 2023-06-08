import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className="py-4 text-center footer-style">Made by Victoria
                Vavulina <span>©&nbsp;</span>️{new Date().getFullYear()}</div>
        </div>
    );
};

export default Footer;
