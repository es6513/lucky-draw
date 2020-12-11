// ///////////////////
// Action
// ///////////////////

export const SET_COUNTDOWN_SECONDS = "SET_COUNTDOWN_SECONDS";

// ///////////////////
// Action Creator
// ///////////////////

export const setCountdownSeconds = (payload) => {
  return { type: SET_COUNTDOWN_SECONDS, payload };
};
