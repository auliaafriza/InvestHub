import React, { Component } from "react";
import NavigationIcon from "./NavigationIcon";

class login extends Component {
  constructor(props) {
    super(props);
  }
  handleHomeIcon = () => {
    this.props.navigation.navigate("Home");
  };

  handleDealsIcon = () => {
    this.props.navigation.navigate("App");
  };
  handleNotificationIcon = () => {
    this.props.navigation.navigate("App");
  };

  handleSetting = () => {
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <NavigationIcon
        handleDealsIcon={this.handleDealsIcon}
        handleHomeIcon={this.handleHomeIcon}
        handleNotificationIcon={this.handleNotificationIcon}
        handleSetting={this.handleSetting}
      />
    );
  }
}

export default login;
