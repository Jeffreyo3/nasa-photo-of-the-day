import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="footerTxt">
          {!props.image.copyright ? (
            <p>Image Copyright: Not Listed</p>
          ) : (
            <p>Image Copyright: {props.image.copyright}</p>
          )}
          <p>WebApp Created by Jeffrey Orndorff using React.js</p>
          Background Tile from:{" "}
          <a target="_blank" rel="noopener noreferrer" href="http://background-tiles.com">Background Tiles</a>{" & "}
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/planet--v1">
            Planet icon
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
