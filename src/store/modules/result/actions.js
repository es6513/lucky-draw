// ///////////////////
// Action
// ///////////////////

export const TOGGLE_SHOW_RESULT = "TOGGLE_SHOW_RESULT";

// ///////////////////
// Action Creator
// ///////////////////

export const toggleShowResult = (payload) => {
  return { type: TOGGLE_SHOW_RESULT, payload };
};
