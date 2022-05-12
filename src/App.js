import React from "react";
import './App.css';

const App = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__container">
                    <a href="https://google.com/" className="header__logo">
                        <img src="https://thumbs.dreamstime.com/b/%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82-%D0%B3%D0%BE%D1%80%D0%B8%D0%BB%D0%BB%D1%8B-%D1%81-%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%BC-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BB%D0%B8%D1%86%D0%B0-177827722.jpg" alt="Логотип"/>
                    </a>
                    <div className="header__name">
                        Gorilla Network
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="main__container">
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
            </main>
        </div>
    );
};

export default App;
