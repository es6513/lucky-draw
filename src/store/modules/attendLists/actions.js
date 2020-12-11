// ///////////////////
// Action
// ///////////////////

export const SET_LUCKY_PERSON = "SET_LUCKY_PERSON";

// ///////////////////
// Action Creator
// ///////////////////

export const setLuckyPerson = (payload) => {
  return { type: SET_LUCKY_PERSON, payload };
};
