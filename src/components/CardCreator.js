import React from "react";

function CardCreator(props) {

    return (
        <div className="cardBody">

            <img className="cardImg" src={props.mediaSRC}/>

            <div className="cardBody">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default CardCreator;
