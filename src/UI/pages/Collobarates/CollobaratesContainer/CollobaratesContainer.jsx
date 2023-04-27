import React from "react";
import Collobarates from "../Collobarates";
import { connect } from "react-redux";
import { getUsers } from "../../../../BLL/collobaratesReducer";

class CollobaratesContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(100, 1);
  }
  render() {
    return (
      <div>
        <Collobarates {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collobarates: state.collobarate.collobarates,
  };
};

export default connect(mapStateToProps, { getUsers })(CollobaratesContainer);
