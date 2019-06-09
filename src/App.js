import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';
import Icon from 'react-native-ionicons';
import { AppNavigator } from './router';
import { Scanner, Login, Hilfe, Suche } from './Screens/Index';
import { ScannerButton } from './Components/index';
import color from './Styles/Color';
// TODO Entfernen vor Release
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Remote debugger',
  'Warning: ViewPager',
]);
// TODO react-native-pdf
// TODO socketio in eigene File

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
