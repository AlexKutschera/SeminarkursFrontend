import { INIT_SESSION_ID, LOGIN, LOGOUT } from "../actions/user";

const initialState = {
  session_id: null
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        session_id: action.payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        session_id: null
      };
    }
    case INIT_SESSION_ID: {
      return {
        ...state,
        session_id: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
