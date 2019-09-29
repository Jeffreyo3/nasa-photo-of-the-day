import React from 'react';

const Footer = (props) => {


    if (props.copyright !== "") {
        return (
            <footer>
                <div className="footerTxt">
                    
                    <p>Image Copyright: Not Listed</p>
                    <p>WebApp Created by Jeffrey Orndorff </p>
                </div>
            </footer>
        )
    } else {
        return(
            <footer>
                <div className="footerTxt">
                    
                    <p>Image Copyright: {props.copyright}</p>
                    <p>WebApp Created by Jeffrey Orndorff © 2019</p>
                </div>
            </footer>
        )
    }
};

export default Footer;