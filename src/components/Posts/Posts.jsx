import React from "react";
import style from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <section className={style.posts}>
            <div className={style.posts__container}>
                <div className={style.posts__body}>
                    <div className={style.posts__tab}></div>
                    <div className={style.posts__publish}>
                        <Post/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Posts;