import React, { Component } from "react";
import FormHome from "./formHome";
// import NavigationIcon from "../navigationIcon/Navigation";
import { View } from "react-native";

class home extends Component {
  render() {
    return (
      <View>
        <FormHome />
        {/* <NavigationIcon /> */}
      </View>
    );
  }
}

export default home;
