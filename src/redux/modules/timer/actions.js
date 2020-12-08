// ///////////////////
// Action
// ///////////////////

export const SET_TIMER = "SET_TIMER";

// ///////////////////
// Action Creator
// ///////////////////

export const setTimer = (timer) => {
  const payload = { timer };
  return { type: SET_TIMER, payload };
};
