import React from 'react';

const Footer = (props) => {


    if (props.copyright !== "") {
        return (
            <footer>
                <div className="footerTxt">
                    
                    <p>Image Copyright: Not Listed</p>
                    <p>WebApp Created by Jeffrey Orndorff </p>
                    <p>Background Tile from: <a href="http://background-tiles.com">Background Tiles</a></p>
                </div>
            </footer>
        )
    } else {
        return(
            <footer>
                <div className="footerTxt">
                    
                    <p>Image Copyright: {props.copyright}</p>
                    <p>WebApp Created by Jeffrey Orndorff © 2019</p>
                    <p>Background Tile from: <a href="http://background-tiles.com">Background Tiles</a></p>
                </div>
            </footer>
        )
    }
};

export default Footer;