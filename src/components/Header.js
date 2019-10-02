import React from "react";

const Header = (props) => {
    return(
        <header>
            <h1 className="title">🚀 NASA Picture of the Day 🚀</h1>
            <div className="imageHeader">
                <h2>Title: {props.title}</h2>
                <p>Date: {props.date}</p>
            </div>
        </header>
    );
};

export default Header;