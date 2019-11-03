import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

class textWarning extends Component {
  state = {
    show: false
  };

  render() {
    const {
      textwarning,
      show,
      sizetext,
      paddingleft,
      alignSelfText
    } = this.props;
    const containerWarning = [styles.containerWarning];
    const textwarningstyles = [styles.warningtext];

    if (paddingleft) {
      containerWarning.push({ paddingLeft: paddingleft });
    }
    if (sizetext) {
      textwarningstyles.push({ fontSize: sizetext });
    }
    if (alignSelfText) {
      containerWarning.push({ alignSelf: alignSelfText });
    }

    return (
      <View style={containerWarning}>
        {show ? <Text style={textwarningstyles}>{textwarning}</Text> : null}
      </View>
    );
  }
}

textWarning.propTypes = {
  textwarning: PropTypes.string,
  show: PropTypes.bool,
  sizetext: PropTypes.number,
  paddingleft: PropTypes.string,
  alignSelfText: PropTypes.string
};

export default textWarning;
