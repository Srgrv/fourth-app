import { legacy_createStore as createStore, combineReducers } from "redux";
import homeReducer from "./homeReducer";
import collobaresReducer from "./collobaratesReducer";

const reducers = combineReducers({
  home: homeReducer,
  collobarate: collobaresReducer,
});

const store = createStore(reducers);

export default store;
