import React, { Component } from "react";
import FormDeals from "./formDeals";
import PropTypes from "prop-types";
import { Alert } from "react-native";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  handleDetail = () => {
    Alert.alert("Detail", "Detail UMKM");
  };

  handleCancel = () => {
    Alert.alert("Cancel", "Cancel");
  };

  render() {
    return (
      <FormDeals
        handleCancel={this.handleCancel}
        handleDetail={this.handleDetail}
      />
    );
  }
}

export default login;
