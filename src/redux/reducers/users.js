import { IMPORT_USERS } from "../actions/users";

let users = (state = [], { type, payload }) => {
  switch (type) {
    case IMPORT_USERS:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default users;
