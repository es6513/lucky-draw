import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import timerReducer from "./modules/timer";
import listsReducer from "./modules/attendLists";
import resultReducer from "./modules/result";

// Reducers
const rootReducer = combineReducers({
  timerReducer,
  listsReducer,
  resultReducer,
});

//DevTool

const devTools = composeWithDevTools({});

//Store

const configureStore = () => {
  const store = createStore(rootReducer, devTools());
  return store;
};

export default configureStore;
