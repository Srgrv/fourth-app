import React from "react";
import LoginReduxForm from "../../../forms/loginForm/LoginForm";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  if (props.auth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} {...props} />
    </div>
  );
};

export default Login;
