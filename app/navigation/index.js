import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { LoginStack } from "./loginNav";
import homeNav from "./homeNav";

const Root = createStackNavigator(
  {
    App: homeNav,
    Auth: LoginStack
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