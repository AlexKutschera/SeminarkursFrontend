/*
 * Copyright (c) 2019
 */

import { HIDE_RESULT, SCAN_DATA } from "../actions/scanner";

const initialState = {
  scan_result: null,
  show_result: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SCAN_DATA: {
      return {
        ...state,
        scan_result: action.payload,
        show_result: true
      };
    }
    case HIDE_RESULT: {
      return {
        ...state,
        show_result: false
      };
    }
    default: {
      return state;
    }
  }
};
