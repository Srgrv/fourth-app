import React from "react";
import Login from "./LoginContainer/Login";
import { connect } from "react-redux";
import { login } from "../../../BLL/loginReducer";

class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    email: state.login.email,
    auth: state.login.auth,
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
