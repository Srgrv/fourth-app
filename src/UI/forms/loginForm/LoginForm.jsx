import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./LoginForm.module.css";
import Input from "./makePostForm/formsControls/Input";
import { required } from "../loginForm/makePostForm/validators";
import Element from "./makePostForm/formsControls/Element";

const LoginForm = (props) => {
  return (
    <div className={classes.loginForm}>
      <form onSubmit={props.handleSubmit} className={classes.form}>
        <div className={classes.login}>
          <Field
            component={Input}
            name="login"
            placeholder="login"
            validate={[required]}
          />
        </div>
        <div className={classes.password}>
          <Field
            component={Element("input")}
            name="password"
            placeholder="password"
            validate={[required]}
          />
        </div>
        <div className={classes.rememberMe}>
          <Field
            component="input"
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
