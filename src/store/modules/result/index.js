import { TOGGLE_SHOW_RESULT } from "./actions";

const initState = {
  isResultShowed: false,
  count: 1,
  count2: 1,
};

const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_RESULT:
      const { isResultShowed } = action.payload;
      return {
        ...state,
        isResultShowed,
      };
    default:
      return state;
  }
};

export default resultReducer;
