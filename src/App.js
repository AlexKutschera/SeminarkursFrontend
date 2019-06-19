import React, { Component } from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Hilfe, Login, Scanner } from './Screens/Index';
import reducer from './reducers';
// TODO Entfernen vor Release
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Remote debugger',
  'Warning: ViewPager',
]);
// TODO react-native-pdf
// TODO socketio in eigene File

const AppNavigator = createMaterialTopTabNavigator(
  {
    Login,
    Scanner,
    Hilfe,
  },
  {
    initialRouteName: 'Scanner',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
  }
);

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
