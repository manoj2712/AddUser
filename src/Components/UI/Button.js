import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return <button type = "onClick" classes={classes.button}>{props.children}</button>;
};

export default Button;
