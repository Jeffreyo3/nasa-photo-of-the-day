import React from 'react';

const Footer = (props) => {

    return(

        <footer>
            <div className="footerTxt">
                <p>Image Copyright {props.copyright}</p>
                <p>WebApp Created by Jeffrey Orndorff</p>
            </div>
        </footer>

    );
};

export default Footer;