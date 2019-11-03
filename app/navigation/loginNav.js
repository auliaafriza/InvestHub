import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/login/login";

export const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});
