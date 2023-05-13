import { getAuth } from "./loginReducer";

const SET_INITIAL = "SET_INITIAL";

const initialState = {
  initial: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL:
      return { ...state, initial: true };
    default:
      return state;
  }
};

export const setInitial = () => {
  return { type: SET_INITIAL };
};

export const initialize = () => (dispatch) => {
  dispatch(getAuth()).then((response) => {
    dispatch(setInitial());
  });
};

export default appReducer;
