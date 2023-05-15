import React from "react";
import classes from "./Main.module.css";
import Status from "../../components/Status/Status";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.avatar}>
        <img src={props.avatar} alt="" />
      </div>
      <div className={classes.name}>
        <Status
          status={props.status}
          myId={props.myId}
          putStatus={props.putStatus}
        />
        <div>{props.fullName}</div>
        <div>Обо мне: {props.aboutMe}</div>
        <div>Гитхаб: {props.github}</div>
      </div>
    </div>
  );
};

export default Main;
