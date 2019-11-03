import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import home from "../screens/home/home";
import settingNav from "../screens/account/account";
import notif from "../screens/notif/notif";
import deals from "../screens/deals/DealPage";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const topNav = createMaterialTopTabNavigator(
  {
    Home: {
      screen: home,
      navigationOptions: {
        title: "Home",
        header: null
      }
    },
    Deal: {
      screen: deals,
      navigationOptions: {
        title: "Deals",
        header: null
      }
    },
    Notif: {
      screen: notif,
      navigationOptions: {
        title: "Notif",
        header: null
      }
    },
    Setting: {
      screen: settingNav,
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
        } else if (routeName === "Deal") {
          return <FontAwesome name="suitcase" size={18} color={tintColor} />;
        } else if (routeName === "Notif") {
          return (
            <Ionicons name="md-notifications" size={18} color={tintColor} />
          );
        } else if (routeName === "Setting") {
          return <Ionicons name="md-settings" size={18} color={tintColor} />;
        }
      }
    }),
    tabBarPosition: "top",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#800020",
      inactiveTintColor: "#252525",
      style: {
        backgroundColor: "#efefef",
        paddingTop: StatusBar.currentHeight
      },
      labelStyle: {
        textAlign: "center",
        fontSize: 12
      },
      indicatorStyle: {
        borderBottomWidth: 2,
        borderBottomColor: "#800020"
      }
    }
  }
);

const App = createStackNavigator({
  TabScreen: {
    screen: topNav,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(App);
