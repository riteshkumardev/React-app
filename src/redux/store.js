import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "../Exam/reducerExam";

import { changeCount1 } from "./reducer";

const allReducer = combineReducers({
  count: changeCount1,
  Data: reducer,
});
export const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
