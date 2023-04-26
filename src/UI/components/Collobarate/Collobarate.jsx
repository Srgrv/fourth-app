import React, { useState } from "react";
import classes from "./Collobarate.module.css";

// import { ReactComponent as avatar } from "./SVG/logo192.png";

const avatar = "../../../../logo192.png";

const Collobarate = (props) => {
  const [follow, setFollow] = useState(true);

  const change = () => {
    setFollow(!follow);
  };

  return (
    <div className={classes.collobarate}>
      <div className={classes.avatar}>
        <img src={avatar} />
      </div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.button}>
        <div onClick={change}>{follow ? "Unfollow" : "Follow"}</div>
      </div>
    </div>
  );
};

export default Collobarate;
