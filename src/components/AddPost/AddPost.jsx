import React from "react";
import style from "./AddPost.module.css";

const AddPost = () => {
    return (
        <section className={style.addPost}>
            <div className={style.addPost__container}>
                <div className={style.addPost__body}>
                    <div className={style.addPost__tab}></div>
                    <div className={style.addPost__publish}>
                        <div className={style.typePost}>
                            <div className={style.typePost__body}>
                                <div className={style.typePost__title}>
                                    New post
                                </div>
                                <div className={style.typePost__area}>
                                    <textarea name="text"></textarea>
                                </div>
                                <a href="#" className={style.typePost__button}>
                                    Post
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddPost;