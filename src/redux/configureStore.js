import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import timerReducer from "./modules/timer";
import listsReducer from "./modules/attendLists";

// Reducers
const rootReducer = combineReducers({
  timerReducer,
  listsReducer,
});

//DevTool

const devTools = composeWithDevTools({});

//Store

const configureStore = () => {
  const store = createStore(rootReducer, devTools());
  return store;
};

export default configureStore;
