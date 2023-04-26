import React from "react";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.avatar}>
        <img src={props.avatar} />
      </div>
      <div className={classes.name}>
        <div>{props.fullName}</div>
        <div>Обо мне: {props.aboutMe}</div>
        <div>Гитхаб: {props.github}</div>
      </div>
    </div>
  );
};

export default Main;
