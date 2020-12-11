import { SET_LUCKY_PERSON } from "./actions";
import mockAttendLists from "./mockData";

const initState = {
  attendLists: mockAttendLists,
  luckyPerson: null,
};

const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LUCKY_PERSON:
      const { selectedId } = action.payload;
      const luckyPerson = attendLists.find(
        (person) => person.id === selectedId
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
