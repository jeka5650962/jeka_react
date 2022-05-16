import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";
import AddPost from "./components/AddPost/AddPost";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <AddPost/>
            <Posts/>
            <Footer/>
        </div>
    );
};

export default App;