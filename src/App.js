import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Scanner, Login, Hilfe, Suche } from './Screens/Index';

const AppNavigator = createStackNavigator(
  {
    Home,
    Scanner,
    Login,
    Hilfe,
    Suche,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
