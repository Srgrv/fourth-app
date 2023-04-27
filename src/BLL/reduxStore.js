import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import homeReducer from "./homeReducer";
import collobaresReducer from "./collobaratesReducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

const reducers = combineReducers({
  home: homeReducer,
  collobarate: collobaresReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
