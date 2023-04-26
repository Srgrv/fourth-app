import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  console.log(props);
  return (
    <div className={classes.loginForm}>
      <form onSubmit={props.handleSubmit} className={classes.form}>
        <div className={classes.login}>
          <Field component={"input"} name="login" placeholder="login" />
        </div>
        <div className={classes.password}>
          <Field component={"input"} name="password" placeholder="password" />
        </div>
        <div className={classes.rememberMe}>
          <Field
            component={"input"}
            name="rememberMe"
            placeholder="password"
            type="checkbox"
          />
          remember me
        </div>
        <div className={classes.button}>
          <button>add</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "loginForm" })(LoginForm);

export default LoginReduxForm;
