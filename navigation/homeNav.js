import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import home from "../screens/HomeScreen";
import linkNav from "../screens/LinksScreen";
import settingNav from "../screens/SettingsScreen";
// import TicketIcon from "./../assets/Icon/my_booking.png";
// import MyAccountIcon from "./../assets/Icon/account.png";
// import HomeIcon from "./../assets/Icon/home.png";
//import styles from "./styles";

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

export default createMaterialTopTabNavigator(
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
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     if (routeName === "Home") {
    //       return (
    //         <Image
    //           source={HomeIcon}
    //           resizeMode="contain"
    //           style={[styles.image20, { tintColor: tintColor }]}
    //         />
    //       );
    //     } else if (routeName === "MyBooking") {
    //       return (
    //         <Image
    //           source={TicketIcon}
    //           resizeMode="contain"
    //           style={[styles.image20, { tintColor: tintColor }]}
    //         />
    //       );
    //     } else if (routeName === "MyAccount") {
    //       return (
    //         <Image
    //           source={MyAccountIcon}
    //           resizeMode="contain"
    //           style={[styles.image20, { tintColor: tintColor }]}
    //         />
    //       );
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
