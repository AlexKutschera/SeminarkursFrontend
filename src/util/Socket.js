/*
 * Copyright (c) 2019
 */

import io from "socket.io-client/dist/socket.io";
import * as AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import { store } from "../App";
import { LOAD_USER_DATA, loadUserData, LOGIN, logout } from "../actions/user";
import { LOAD_COMMENTS, loadItemComments, SCAN_DATA } from "../actions/scanner";
import { setOffline, setOnline } from "../actions/state";

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
      loadUserData(data.session_id);
    });
    this.socket.on("session.user.get.result", data => {
      if (data.result instanceof Array && data.result.length > 0) {
        store.dispatch({
          type: LOAD_USER_DATA,
          payload: data.result[0]
        });
      }
    });
    this.socket.on("item.get.result", data => {
      if (data !== "Keine Ergebnisse" && data.length > 0) {
        store.dispatch({
          type: SCAN_DATA,
          payload: data[0]
        });
      }
      if (data === "Nicht ausreichende Berechtigung") {
        logout();
      }
    });
    this.socket.on("get.comment.item.result", data => {
      console.log(data.result);
      if (data !== "Nicht ausreichende Berechtigung") {
        store.dispatch({
          type: LOAD_COMMENTS,
          payload: []
        });
        store.dispatch({
          type: LOAD_COMMENTS,
          payload: data.result
        });
      }
      if (data === "Nicht ausreichende Berechtigung") {
        logout();
      }
    });
    this.socket.on("user.comment.result", data => {
      loadItemComments(store.getState().scanner.scan_result.ITEM_ID);
    });
    this.socket.on("connect", () => setOnline());
    this.socket.on("disconnect", () => setOffline());
  }

  static getSocket() {
    if (this.socket == null) {
      this.connect();
    }
    return this.socket;
  }
}

export default Socket;
