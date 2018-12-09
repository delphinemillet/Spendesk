import { SET_HEADER, SET_CONTENT } from "../actions/users";

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

    default:
      return state;
  }
};

export default users;
