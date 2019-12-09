import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DetailPengguna from '../screens/pengguna/detailPengguna/detailpengguna';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

export const DetailPenggunaPageStack = createStackNavigator(
  {
    DetailPengguna: {
      screen: DetailPengguna,
      navigationOptions: {
        headerTitle: 'Detail Pengguna',
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
