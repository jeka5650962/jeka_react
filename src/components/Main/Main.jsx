import React from "react";
import style from "./Main.module.css";

const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.main__container}>
                <div className={style.main__body}>
                    <nav className={style.navbar}>
                        <ul className={style.navbar__list}>
                            <li className={style.navbar__item}>
                                <a href="src/components/Main/Main" className={`${style.navbar__link} ${style.active}`}>Profile</a>
                            </li>
                            <li className={style.navbar__item}>
                                <a href="src/components/Main/Main" className={style.navbar__link}>Messages</a>
                            </li>
                            <li className={style.navbar__item}>
                                <a href="src/components/Main/Main" className={style.navbar__link}>News</a>
                            </li>
                            <li className={style.navbar__item}>
                                <a href="src/components/Main/Main" className={style.navbar__link}>Music</a>
                            </li>
                            <li className={style.navbar__item}>
                                <a href="src/components/Main/Main" className={style.navbar__link}>Settings</a>
                            </li>
                        </ul>
                    </nav>
                    <section className={style.content}>
                        <div className={style.content__body}>
                            Content
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;
