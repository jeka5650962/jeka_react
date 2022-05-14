import React from "react";
import style from "./Content.module.css";

const Content = () => {
    return (
        <section className={style.content}>
            <div className={style.content__body}>
                Content
            </div>
        </section>
    );
};

export default Content;