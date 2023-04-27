import { userAPI } from "../API/api";

const SET_COLLOBARATES = "SET_COLLOBARATES";

const defaultState = {
  collobarates: [
    {
      name: "Sergey Georgiev",
      avatar: "../../public/logo192.png",
    },
    {
      name: "Kyshak Georgiev",
      avatar: "../../public/logo192.png",
    },
    {
      name: "Anastasia Danilova",
      avatar: "../../public/logo192.png",
    },
  ],
};

const collobarateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COLLOBARATES:
      return { ...state, collobarates: action.collobarates };
    default:
      return state;
  }
};

export const set_collobarates = (collobarates) => {
  return { type: SET_COLLOBARATES, collobarates };
};

export const getUsers = (count, page) => {
  return (dispatch) => {
    userAPI.getUsers(count, page).then((response) => {
      dispatch(set_collobarates(response.items));
    });
  };
};

export default collobarateReducer;
