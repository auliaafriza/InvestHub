import { createStackNavigator } from "react-navigation-stack";
import SignUp from "../screens/signUp/signUp";

export const SignUpStack = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  }
});
