import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppNavigator } from './router';
import reducer from './reducers';
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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
