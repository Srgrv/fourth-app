import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Button.module.css";

const Button = ({ name, svgComponent, to, ...props }) => {
  return (
    <NavLink to={to} {...props}>
      <div className={classes.wrapper}>
        <div className={classes.button}>{svgComponent}</div>
        <div className={classes.name}>{name}</div>
      </div>
    </NavLink>
  );
};

// const SVGSelector = () => {
//     return (
//         <div></div>
//     )
// }

export default Button;
