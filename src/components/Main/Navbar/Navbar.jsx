import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}>
                    <a href="https://google.ru/" className={`${style.navbar__link} ${style.active}`}>Profile</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="https://google.ru/" className={style.navbar__link}>Messages</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="https://google.ru/" className={style.navbar__link}>News</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="https://google.ru/" className={style.navbar__link}>Music</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="https://google.ru/" className={style.navbar__link}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;