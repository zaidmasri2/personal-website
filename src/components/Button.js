import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.primary ? "primary" : "secondary"}>
        <a href="mailto:zaidmasri2@gmail.com">Get in Touch</a>
      </button>
    </div>
  );
};

export default Button;
