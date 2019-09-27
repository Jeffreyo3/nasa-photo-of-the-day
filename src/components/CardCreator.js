import React from "react";

function CardCreator(props) {

    return (
        <div className="cardBody">

            <img className="cardImg" src={props.mediaSRC}/>

            <div className="cardBody">
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default CardCreator;
