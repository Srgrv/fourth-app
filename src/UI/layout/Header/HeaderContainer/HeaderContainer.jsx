import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { logout } from "../../../../BLL/loginReducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    auth: state.login.auth,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
