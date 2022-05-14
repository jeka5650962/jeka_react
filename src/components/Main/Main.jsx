import React from "react";
import style from "./Main.module.css";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.main__container}>
                <div className={style.main__body}>
                    <Navbar/>
                    <Content/>
                </div>
            </div>
        </main>
    );
};

export default Main;