import { SET_TIMER } from "./actions";

// ///////////////////
// Initial State
// ///////////////////
const initState = 0;

// ///////////////////
// Rd
// ///////////////////

const timerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TIMER:
      const { timer } = action.payload;
      return {
        ...state,
        timer,
      };

    default:
      return state;
  }
};

export default timerReducer;
