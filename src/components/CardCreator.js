import React from "react";

function CardCreator(props) {

    return (
        <div className="card" key={props.date}>
            <div className="cardHead">
                <h1>Title: {props.title}</h1>
                <p>Date: {props.key}</p>
            </div>

            <img className="cardImg" alt="" src=""/>

            <div className="cardBody">
                <h3>Description</h3>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
}

export default CardCreator;
