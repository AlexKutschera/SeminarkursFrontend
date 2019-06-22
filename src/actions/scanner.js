/*
 * Copyright (c) 2019
 */

import { store } from "../App";
import Socket from "../util/Socket";

export const SCAN_DATA = "SCAN_DATA";
export const HIDE_RESULT = "HIDE_RESULT";

export const hideResult = () => {
  store.dispatch({
    type: HIDE_RESULT,
    payload: null
  });
};

export const loadScannerData = scannerResult => {
  Socket.getSocket().emit("item.get", {
    condition: scannerResult,
    session_id: store.getState().user.session_id
  });
};
