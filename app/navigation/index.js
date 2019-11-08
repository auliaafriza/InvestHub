import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { LoginStack } from "./loginNav";
import homeNav from "./homeNav";
import { SignUpStack } from "./signUpNav";

const Root = createStackNavigator(
  {
    App: homeNav,
    Auth: LoginStack,
    SignUp: SignUpStack
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
