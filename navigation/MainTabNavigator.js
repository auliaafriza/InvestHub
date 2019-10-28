import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
// import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => null
    }
  }
});

export const LinksStack = createStackNavigator({
  Links: {
    screen: LinksScreen,
    navigationOptions: {
      header: () => null
    }
  }
});

export const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: () => null
    }
  }
});

export const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: "Home",
        header: null
      }
    },
    Link: {
      screen: LinksStack,
      navigationOptions: {
        title: "Link",
        header: null
      }
    },
    Setting: {
      screen: SettingsStack,
      navigationOptions: {
        title: "Setting",
        header: null
      }
    }
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     if (routeName === "Home") {
    //       return <Ionicons name="ios-home" size={32} color={tintColor} />;
    //     } else if (routeName === "Link") {
    //       return <Ionicons name="md-link" size={32} color={tintColor} />;
    //     } else if (routeName === "Setting") {
    //       return <Ionicons name="ios-settings" size={32} color={tintColor} />;
    //     }
    //   }
    // }),
    tabBarOptions: {
      activeTintColor: "#e6ca6b",
      inactiveTintColor: "#efefef",
      style: {
        backgroundColor: "#252525",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        shadowColor: "#d3d3d3",
        shadowOffset: {
          width: 5,
          height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0,
        elevation: 13
      }
    }
  }
);
