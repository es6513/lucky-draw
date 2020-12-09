// ///////////////////
// Action
// ///////////////////

export const SET_TIMER = "SET_TIMER";

// ///////////////////
// Action Creator
// ///////////////////

export const setTimer = (payload) => {
  return { type: SET_TIMER, payload };
};
