import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

const defaultState = {
  profile: {
    aboutMe: "Очень хороший программист",
    contacts: {
      facebook: "facebook.com/krozeal",
      website: "www.webdol.by",
      vk: "vk.com/krozeal",
      twitter: "twitter.com",
      instagram: "instagram.com",
      youtube: "youtube.com",
      github: "github.com/krozeal",
      mainLink: "mainlink.com/profile",
    },
    lookingForAJob: true,
    lookingForAJobDescription:
      "Хочу очень высокооплачиваемую работу и интересную",
    fullName: "Дмитрий Долидов",
    userId: 28418,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/10/user-small.jpg?v=0",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/10/user.jpg?v=0",
    },
  },
  status: "Hello world",
  posts: ["Hell", "ehll"],
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.post] };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPost = (post) => {
  return { type: ADD_POST, post };
};

export const setProfile = (profile) => {
  return { type: SET_PROFILE, profile };
};

const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const putStatus = (status) => {
  return (dispatch) => {
    profileAPI.putStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(response.data));
      }
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response));
    });
  };
};

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setProfile(response));
    });
  };
};

export default homeReducer;
