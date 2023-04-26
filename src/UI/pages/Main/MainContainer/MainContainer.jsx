import React from "react";
import Main from "../Main";
import MakePost from "./MakePost/MakePost";
import Posts from "./Posts/Posts";
import { connect } from "react-redux";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Main {...this.props} />
        <MakePost />
        <Posts posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.home.fullName,
    avatar: state.home.photos.large,
    aboutMe: state.home.aboutMe,
    github: state.home.contacts.github,
    posts: state.home.posts,
  };
};

export default connect(mapStateToProps, {})(MainContainer);
