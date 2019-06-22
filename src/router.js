import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Icon from "react-native-ionicons";
import { AuthLoadingScreen, Chat, Product, Scanner, Suche } from "./Screens/Index";
import color from "./Styles/Color";
import { ScannerButton } from "./Components/index";

const TabNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: AuthLoadingScreen,
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
    resetOnBlur: true,
    lazy: true,
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
    Product,
    TabNavigator,
  },
  { initialRouteName: 'TabNavigator', headerMode: 'none' }
);
