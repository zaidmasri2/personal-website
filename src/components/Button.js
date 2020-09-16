import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.primary ? "primary" : "secondary"}>
        Get in Touch
      </button>
    </div>
  );
};

export default Button;
