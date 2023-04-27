import React from "react";
import classes from "./Header.module.css";
import Button from "../LeftSideBar/Button/Button";
// import { NavLink } from "react-router-dom";

// const active = ({ isActive }) =>
//   isActive ? `${classes.active} ${classes.unactive}` : classes.unactive;

const Header = () => {
  return (
    <header className={classes.header}>
      <Button to={"login"} name={"Login"} />
    </header>
  );
};

export default Header;
