import React from "react";
import classes from "./Input.module.css";

const Element = (Component) => {
  const withComponent = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
      <div className={hasError ? classes.input : undefined}>
        <Component {...input} {...props} />
      </div>
    );
  };
  return withComponent;
};

export default Element;
