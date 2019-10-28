import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

import LoginScreen from "../screens/login/login";

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null
    }
  }
});

export default createAppContainer(
  createSwitchNavigator({
    Login: LoginStack
  })
);
