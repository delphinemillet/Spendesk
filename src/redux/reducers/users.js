import { SET_HEADER, SET_CONTENT, EDIT_USER } from "../actions/users";

const defaultState = {
  header: [],
  data: []
};

let users = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_HEADER:
      return {
        ...state,
        header: payload
      };

    case SET_CONTENT:
      return {
        ...state,
        data: payload
      };

    case EDIT_USER: {
      const { row, index } = payload.position;
      const newState = state.data;
      newState[row][index] = payload.value;
      return {
        ...state,
        data: newState
      };
    }

    default:
      return state;
  }
};

export default users;
