import React from "react";
import Login from "./LoginContainer/Login";
import { connect } from "react-redux";

class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(LoginContainer);
