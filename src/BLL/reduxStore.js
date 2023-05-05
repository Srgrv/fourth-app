import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import homeReducer from "./homeReducer";
import collobaresReducer from "./collobaratesReducer";
import loginReducer from "./loginReducer";
import appReducer from "./appReducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

const reducers = combineReducers({
  home: homeReducer,
  collobarate: collobaresReducer,
  login: loginReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
