import React from "react";

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__body">
                    <nav className="navbar">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <a href="https://google.com/" className="navbar__link">Profile</a>
                            </li>
                            <li className="navbar__item">
                                <a href="https://google.com/" className="navbar__link">Messages</a>
                            </li>
                            <li className="navbar__item">
                                <a href="https://google.com/" className="navbar__link">News</a>
                            </li>
                            <li className="navbar__item">
                                <a href="https://google.com/" className="navbar__link">Music</a>
                            </li>
                            <li className="navbar__item">
                                <a href="https://google.com/" className="navbar__link">Settings</a>
                            </li>
                        </ul>
                    </nav>
                    <section className="content">
                        <div className="content__body">
                            Content
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;
