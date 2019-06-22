/*
 * Copyright (c) 2019
 */

import { combineReducers } from "redux";
import userReducer from "./user";
import scannerReducer from "./scanner";

export default combineReducers({
  user: userReducer,
  scanner: scannerReducer
});
