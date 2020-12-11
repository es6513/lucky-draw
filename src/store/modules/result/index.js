import { TOGGLE_SHOW_RESULT } from "./actions";

const initState = {
  isResultShowed: false,
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
