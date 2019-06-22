/*
 * Copyright (c) 2019
 */

import io from "socket.io-client/dist/socket.io";
import * as AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import { store } from "../App";
import { LOGIN } from "../actions/user";
import { SCAN_DATA } from "../actions/scanner";

class Socket {
  static socket = null;

  static connect() {
    this.socket = io("https://seminarkurs.alexkutschera.de/");
    this.socket.on("user.login.result", data => {
      AsyncStorage.setItem("session_id", data.session_id).then(() => {
        store.dispatch({
          type: LOGIN,
          payload: data.session_id
        });
      });
    });
    this.socket.on("item.get.result", data => {
      if (data !== "Keine Ergebnisse" && data.length > 0) {
        store.dispatch({
          type: SCAN_DATA,
          payload: data[0]
        });
      }
    });
  }

  static getSocket() {
    if (this.socket == null) {
      this.connect();
    }
    return this.socket;
  }
}

export default Socket;
