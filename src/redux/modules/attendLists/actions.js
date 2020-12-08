// ///////////////////
// Action
// ///////////////////

export const SET_LUCKY_PERSON = "SET_LUCKY_PERSON";

// ///////////////////
// Action Creator
// ///////////////////

export const setTimer = (selectedId) => {
  const payload = { selectedId };
  return { type: SET_LUCKY_PERSON, payload };
};
