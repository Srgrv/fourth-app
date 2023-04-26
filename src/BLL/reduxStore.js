import { legacy_createStore as createStore, combineReducers } from "redux";
import homeReducer from "./homeReducer";
import collobaresReducer from "./collobaratesReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  home: homeReducer,
  collobarate: collobaresReducer,
  form: formReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
