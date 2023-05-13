import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_AUTH = "SET_AUTH";
const DELETE_AUTH = "DELETE_AUTH";

const defaultStore = {
  id: 10,
  login: null,
  email: null,
  auth: false,
};

const loginReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...action.auth, auth: true };
    case DELETE_AUTH:
      return { ...state, id: null, login: null, email: null, auth: false };
    default:
      return state;
  }
};

export const setAuth = (id, login, email) => {
  return { type: SET_AUTH, auth: { id, login, email } };
};

export const deleteAuth = () => {
  return { type: DELETE_AUTH };
};

export const getAuth = () => {
  return (dispatch) => {
    return authAPI.getAuth().then((response) => {
      console.log(response.data);
      if (response.data.resultCode === 0) {
        dispatch(
          setAuth(
            response.data.data.id,
            response.data.data.login,
            response.data.data.email
          )
        );
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.postAuth(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth());
      } else {
        let messages =
          response.data.messages.length > 0 && response.data.messages;
        dispatch(
          stopSubmit("loginForm", {
            _error: messages,
          })
        );
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.deleteAuth().then((response) => {
      dispatch(deleteAuth());
    });
  };
};

export default loginReducer;
