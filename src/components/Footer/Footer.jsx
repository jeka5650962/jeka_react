import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__body}>
                    <div className={style.footer__text}>
                        © Jeka S. 2022. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
