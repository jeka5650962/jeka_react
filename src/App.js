import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <section className="addPost">
                <div className="addPost__container">
                    <div className="addPost__body">
                        <div className="addPost__tab"></div>
                        <div className="addPost__publish">
                            <div className="typePost">
                                <div className="typePost__body">
                                    <div className="typePost__title">
                                        New post
                                    </div>
                                    <div className="typePost__area">
                                        <textarea name="text"></textarea>
                                    </div>
                                    <a className="typePost__button">
                                        Post
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Posts/>
            <Footer/>
        </div>
    );
};

export default App;