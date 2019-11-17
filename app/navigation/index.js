import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LoginStack} from './loginNav';
import homeNav from './homeNav';
import {SignUpStack} from './signUpNav';
import {DetailPageStack} from './dealNav';
import adminHomeNav from './adminHomeNav';
import geoLocation from '../screens/home/geoLocation';

const Root = createStackNavigator(
  {
    App: homeNav,
    Auth: LoginStack,
    SignUp: SignUpStack,
    DetailPage: DetailPageStack,
    AdminHome: adminHomeNav,
    geoLocation: geoLocation,
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  }
);

const container = createAppContainer(Root);
export default container;
