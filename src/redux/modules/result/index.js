import { TOGGLE_SHOW_RESULT } from "./actions";

const initState = {
  isResultShowed: false,
};

const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_:
      const { isResultShowed } = action.payload;
      return {
        ...state,
        isResultShowed,
      };

    default:
      return state;
  }
};

export default listsReducer;
