import { createStackNavigator } from "react-navigation-stack";
import DetailPage from "../screens/detailPage/detailPage";

export const DetailPageStack = createStackNavigator({
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      header: null
    }
  }
});
