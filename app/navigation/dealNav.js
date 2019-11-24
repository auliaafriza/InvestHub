import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DetailPage from '../screens/detailPage/detailPage';
import DetailUmkmPage from '../screens/umkm/detailUmkm/detailUmkm';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const DetailPageStack = createStackNavigator(
  {
    DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        headerTitle: 'Detail Deal',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{marginLeft: 20}}
        >
          <Ionicons name="ios-arrow-back" size={35} color="#252525" />
        </TouchableOpacity>
      ),
    }),
  }
);

const DetailUmkmStack = createStackNavigator(
  {
    DetailUmkmPage: {
      screen: DetailUmkmPage,
      navigationOptions: {
        headerTitle: 'Detail UMKM',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{marginLeft: 20}}
        >
          <Ionicons name="ios-arrow-back" size={35} color="#252525" />
        </TouchableOpacity>
      ),
    }),
  }
);

export {DetailPageStack, DetailUmkmStack};
