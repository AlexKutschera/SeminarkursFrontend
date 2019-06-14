import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from 'react-native-ionicons';
import {
  Scanner,
  Login,
  Chat,
  Suche,
  Profile,
  AuthLoadingScreen,
} from './Screens/Index';
import color from './Styles/Color';
import { ScannerButton } from './Components/index';

const LoginNavigator = createSwitchNavigator(
  { Profile, Login, AuthLoading: AuthLoadingScreen },
  {
    initialRouteName: 'Login',
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: LoginNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={32} />
        ),
      }),
    },
    // TODO Komplete fläche klickbar (eigenen TabBarComponent)
    Scanner: {
      screen: Scanner,
      navigationOptions: () => ({
        tabBarIcon: props => <ScannerButton {...props} />,
      }),
    },
    Chat: {
      screen: Chat,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="help-circle-outline" color={tintColor} size={32} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Scanner',
    tabBarOptions: {
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

export const AppNavigator = createStackNavigator(
  {
    Suche,
    /*  Product, */
    TabNavigator,
  },
  { initialRouteName: 'TabNavigator', headerMode: 'none' }
);
