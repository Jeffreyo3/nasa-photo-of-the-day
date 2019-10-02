import React from "react";

const Header = (props) => {

    return(
        <header>
            {(props.image.media_type === "video") ? <h1 className="title">NASA Video of the Day</h1> : <h1 className="title">NASA Image of the Day</h1>}
            
        </header>
    );
};

export default Header;