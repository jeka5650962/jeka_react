import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__body">
                    <a href="https://google.com/" className="header__logo">
                        <img
                            src="https://thumbs.dreamstime.com/b/%D1%81%D0%BE%D0%BB%D0%B4%D0%B0%D1%82-%D0%B3%D0%BE%D1%80%D0%B8%D0%BB%D0%BB%D1%8B-%D1%81-%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%BC-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BB%D0%B8%D1%86%D0%B0-177827722.jpg"
                            alt="Логотип"/>
                    </a>
                    <div className="header__name">
                        Gorilla Network
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
