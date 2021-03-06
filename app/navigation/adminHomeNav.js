import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import umkm from '../screens/umkm/umkm';
import settingNav from '../screens/account/account';
import pengguna from '../screens/pengguna/pengguna';
import investasi from '../screens/investasi/investasi';
import {Ionicons, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import {mainColor, white, color1} from '../screens/styles';

const topNav = createMaterialTopTabNavigator(
  {
    UMKM: {
      screen: umkm,
      navigationOptions: {
        title: 'UMKM',
        header: null,
      },
    },
    Pengguna: {
      screen: pengguna,
      navigationOptions: {
        title: 'User',
        header: null,
      },
    },
    Investasi: {
      screen: investasi,
      navigationOptions: {
        title: 'Investasi',
        header: null,
      },
    },
    Setting: {
      screen: settingNav,
      navigationOptions: {
        title: 'Setting',
        header: null,
        role: 'UMKM',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'UMKM') {
          return <FontAwesome name="suitcase" size={18} color={tintColor} />;
        } else if (routeName === 'Pengguna') {
          return <FontAwesome name="users" size={18} color={tintColor} />;
        } else if (routeName === 'Investasi') {
          return (
            <MaterialIcons name="attach-money" size={22} color={tintColor} />
          );
        } else if (routeName === 'Setting') {
          return <Ionicons name="md-settings" size={18} color={tintColor} />;
        }
      },
    }),
    tabBarPosition: 'top',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      // activeTintColor: "#800020",
      // inactiveTintColor: "#252525",
      activeTintColor: white,
      inactiveTintColor: color1,
      style: {
        // backgroundColor: "#efefef",
        backgroundColor: mainColor,
        paddingTop: StatusBar.currentHeight,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 12,
      },
      indicatorStyle: {
        borderBottomWidth: 2,
        // borderBottomColor: "#800020"
        borderBottomColor: white,
      },
    },
  }
);

const App = createStackNavigator({
  TabScreen: {
    screen: topNav,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(App);
