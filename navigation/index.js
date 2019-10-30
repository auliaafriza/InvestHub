import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import { LoginStack } from "./loginNav";
import homeNav from "./homeNav";

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginStack,
    navigationOptions: {
      header: null
    }
  }
});

const AppStack = createStackNavigator({
  Home: {
    screen: homeNav,
    navigationOptions: {
      header: null
    }
  }
});

const Root = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Auth",
    headerMode: "none",
    navigationOptions: {
      header: null
    }
  }
);

const container = createAppContainer(Root);
export default container;
