import React from "react";
import LoginReduxForm from "../../../forms/loginForm/LoginForm";

const onSubmit = (formData) => {
  console.log(formData);
};

const Login = () => {
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
