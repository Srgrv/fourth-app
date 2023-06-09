import React from "react";
import Main from "../Main";
// import MakePost from "./MakePost/MakePost";
import Posts from "./Posts/Posts";
import { connect } from "react-redux";
import MakePostReduxForm from "../../../forms/loginForm/makePostForm/makePostForm";
import { withRouter } from "../../../../hoc/withRouter";
import { getProfile } from "../../../../BLL/homeReducer";
import { addPost } from "../../../../BLL/homeReducer";
import { getAuth } from "../../../../BLL/loginReducer";
import { getStatus } from "../../../../BLL/homeReducer";
import { putStatus } from "../../../../BLL/homeReducer";

class MainContainer extends React.Component {
  onSubmit = (formData) => {
    this.props.addPost(formData.post);
  };

  componentDidMount() {
    let user = this.props.router.params.id;

    if (!user) {
      user = this.props.myId;
      // user = 3;
    }

    this.props.getStatus(user);
    this.props.getProfile(user);
  }

  render() {
    return (
      <div>
        <Main {...this.props} />
        <MakePostReduxForm onSubmit={this.onSubmit} />
        <Posts posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.home.profile.fullName,
    avatar: state.home.profile.photos.large,
    aboutMe: state.home.profile.aboutMe,
    github: state.home.profile.contacts.github,
    posts: state.home.posts,
    myId: state.login.id,
    isAuth: state.login.auth,
    status: state.home.status,
  };
};

export default connect(mapStateToProps, {
  addPost,
  getProfile,
  getAuth,
  getStatus,
  putStatus,
})(withRouter(MainContainer));
