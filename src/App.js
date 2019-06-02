import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import Icon from 'react-native-ionicons';
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

const AppNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={32} />
        ),
      }),
    },
    Scanner: {
      screen: Scanner,
      navigationOptions: () => ({
        tabBarIcon: <ScannerButton />,
      }),
    },
    Hilfe: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="help-circle-outline" color={tintColor} size={32} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      initialRouteName: 'Scanner',
      showLabel: false, // hide labels
      activeTintColor: color.blue05, // active icon color
      inactiveTintColor: color.gray08, // inactive icon color
      style: {
        backgroundColor: color.white, // TabBar background
        height: 48,
        elevation: 4,
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
