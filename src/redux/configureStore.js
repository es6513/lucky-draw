import { createStore, combineReducers } from "redux";
import timerReducer from "./modules/timer";
import listsReducer from "./modules/attendLists";

// Reducers
const rootReducer = combineReducers({
  timerReducer,
  listsReducer,
});

//Store

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
