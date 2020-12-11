import { SET_LUCKY_PERSON } from "./actions";
import mockAttendLists from "./mockData";

const initState = {
  attendLists: mockAttendLists,
  luckyPerson: null,
};

const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LUCKY_PERSON:
      const numbersOfLists = state.attendLists.length;
      const randomSelectedId = Math.floor(Math.random() * numbersOfLists);
      const luckyPerson = state.attendLists.find(
        (person) => person.id === randomSelectedId
      );
      return {
        ...state,
        luckyPerson,
      };

    default:
      return state;
  }
};

export default listsReducer;
