import countreducer from "./contreducer";
import isLogged from "./logredu";
import todo from "./todoreducer";
import userReduscer from "./userReducer";
import { combineReducers } from "redux";

const allreducer = combineReducers({
  countreducer,
  isLogged,
  todo,
  userReduscer,
});

export default allreducer;
