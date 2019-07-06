/*
 * Copyright (c) 2019
 */

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import { AppNavigator } from "./router";
import reducer from "./reducers";
import { INIT_SESSION_ID } from "./actions/user";
import Socket from "./util/Socket";
// TODO Entfernen vor Release
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Remote debugger',
  'Warning: ViewPager',
]);
// TODO react-native-pdf
// TODO socketio in eigene File

const AppContainer = createAppContainer(AppNavigator);

const store = createStore(reducer);

class App extends Component {
  componentWillMount() {
    Socket.connect();
    AsyncStorage.getItem('session_id').then(value => {
      store.dispatch({
        type: INIT_SESSION_ID,
        payload: value,
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export { App, store };
