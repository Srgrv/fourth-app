import React from "react";
import classes from "./Posts.module.css";

const Posts = (props) => {
  let posts = props.posts.map((item, index) => {
    return (
      <div className={classes.posts} key={index}>
        {item}
      </div>
    );
  });

  return <div>{posts}</div>;
};

export default Posts;
