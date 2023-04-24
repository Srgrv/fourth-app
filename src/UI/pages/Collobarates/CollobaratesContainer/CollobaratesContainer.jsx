import React from "react";
import Collobarates from "../Collobarates";
import { connect } from "react-redux";

class CollobaratesContainer extends React.Component {
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

export default connect(mapStateToProps, {})(CollobaratesContainer);
