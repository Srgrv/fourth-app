import React from "react";
import classes from "./Header.module.css";
import Button from "../LeftSideBar/Button/Button";

// import { NavLink } from "react-router-dom";

// const active = ({ isActive }) =>
//   isActive ? `${classes.active} ${classes.unactive}` : classes.unactive;

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Button to={"login"} name={props.auth ? props.email : "Login"} />
      <button onClick={() => props.logout()}>Logout</button>
    </header>
  );
};

export default Header;
