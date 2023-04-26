import React from "react";
import classes from "./MakePost.module.css";

const MakePost = () => {
  return (
    <div className={classes.makePost}>
      <div className={classes.input}>
        <input placeholder="write new post" />
      </div>
      <div className={classes.button}>
        <div>Add</div>
      </div>
    </div>
  );
};

export default MakePost;
