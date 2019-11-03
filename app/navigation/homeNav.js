import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import home from "../screens/HomeScreen";
import linkNav from "../screens/account/account";
import settingNav from "../screens/detailPage/detailPage";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export const LinkStack = createStackNavigator({
  Link: {
    screen: linkNav,
    navigationOptions: {
      header: null
    }
  }
});

export const SettingStack = createStackNavigator({
  Setting: {
    screen: settingNav,
    navigationOptions: {
      header: null
    }
  }
});

export const HomeStack = createStackNavigator({
  Home: {
    screen: home,
    navigationOptions: {
      header: () => null
    }
  }
});

const topNav = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: "Home",
        header: null
      }
    },
    Link: {
      screen: LinkStack,
      navigationOptions: {
        title: "Link",
        header: null
      }
    },
    Setting: {
      screen: SettingStack,
      navigationOptions: {
        title: "Setting",
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return <Ionicons name="md-home" size={18} color={tintColor} />;
        } else if (routeName === "Link") {
          return <SimpleLineIcons name="bag" size={18} color={tintColor} />;
        } else if (routeName === "Setting") {
          return <Ionicons name="md-settings" size={18} color={tintColor} />;
        }
      }
    }),
    tabBarPosition: "top",
    tabBarOptions: {
      showIcon: true,
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

export default createAppContainer(topNav);
