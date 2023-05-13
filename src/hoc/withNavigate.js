import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
  console.log(state.login.auth);
  return {
    auth: state.login.auth,
  };
};

const withNavigate = (Component) => {
  let component = (props) => {
    if (!props.auth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
  return connect(mapStateToProps, {})(component);
};

export default withNavigate;
