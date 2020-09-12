import React from "react";
import "./util.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container dark__background">
      <span className="footer">Made with {Array("\u2665")} and React</span>
    </div>
  );
};

export default Footer;
