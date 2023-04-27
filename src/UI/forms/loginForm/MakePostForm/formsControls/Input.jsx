import React from "react";
import classes from "./Input.module.css";

const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={hasError ? classes.input : undefined}>
      <input {...input} {...props} />
    </div>
  );
};

export default Input;
