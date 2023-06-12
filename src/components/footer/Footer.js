import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="py-4 text-center footer-style">Made by Victoria
                Vavulina <span>©&nbsp;</span>️{new Date().getFullYear()}</footer>
        </div>
    );
};

export default Footer;
