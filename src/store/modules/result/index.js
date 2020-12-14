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
    case "ADD_COUNT":
      console.log("ADD COUNT");
      return {
        ...state,
        count: state.count + 1,
      };

    case "ADD_COUNT2":
      console.log("ADD COUNT 2");
      return {
        ...state,
        count2: state.count2 + 1,
      };
    default:
      return state;
  }
};

export default resultReducer;
