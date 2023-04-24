import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Button.module.css";

const active = ({ isActive }) =>
  isActive ? `${classes.active} ${classes.unactive}` : classes.unactive;

const Button = ({ to, name, svgComponent }) => {
  return (
    <NavLink to={to} className={active}>
      <div className={classes.svg}>{svgComponent}</div>
      <div className={classes.name}>{name}</div>
    </NavLink>
  );
};

// const SVGSelector = () => {
//     return (
//         <div></div>
//     )
// }

export default Button;
