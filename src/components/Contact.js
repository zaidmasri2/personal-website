import React from "react";
import "./util.css";
import "./Contact.css";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact__center">
        <h2 className="heading__md">Contact</h2>
        <p className="subtitle__md">
          Although I am looking for new opportunities specifically, my inbox is
          open to anyone. Feel free to reach out
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Contact;
