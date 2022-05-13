import React from "react";
import style from "./Header.module.css";
import Logo from "./Logo/Logo";
import Name from "./Name/Name";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__body}>
                    <Logo/>
                    <Name/>
                </div>
            </div>
        </header>
    );
};

export default Header;
