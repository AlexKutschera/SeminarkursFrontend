import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { AppRegistry, YellowBox } from 'react-native';
import { Scanner, Login, Hilfe, Suche } from './Screens/Index';
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

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
