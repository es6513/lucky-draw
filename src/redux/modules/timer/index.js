import { SET_COUNTDOWN_SECONDS } from "./actions";

// ///////////////////
// Initial State
// ///////////////////
const initState = {
  countdownSeconds: 0,
};

// ///////////////////
// Reducer
// ///////////////////

const timerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_COUNTDOWN_SECONDS:
      const { countdownSeconds } = action.payload;
      return {
        ...state,
        countdownSeconds,
      };

    default:
      return state;
  }
};

export default timerReducer;
