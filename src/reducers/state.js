/*
 * Copyright (c) 2019
 */

import { SET_OFFLINE, SET_ONLINE } from "../actions/state";

const initialState = {
  is_online: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_ONLINE: {
      return {
        ...state,
        is_online: true
      };
    }
    case SET_OFFLINE: {
      return {
        ...state,
        is_online: false
      };
    }
    default: {
      return state;
    }
  }
};
