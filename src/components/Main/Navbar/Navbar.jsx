import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbar__list}>
                <li className={style.navbar__item}>
                    <a href="/profile" className={`${style.navbar__link} ${style.active}`}>Profile</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="/messages" className={style.navbar__link}>Messages</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="/news" className={style.navbar__link}>News</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="/music" className={style.navbar__link}>Music</a>
                </li>
                <li className={style.navbar__item}>
                    <a href="/settings" className={style.navbar__link}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;