import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import PropTypes from "prop-types";

class formNotif extends Component {
  render() {
    const { data } = this.props;
    return data.map((temp, i) => {
      return (
        <View style={[styles.containerForm, styles.padding20]} key={i}>
          <View style={styles.cardNotif}>
            <Text style={styles.text18}>{temp.DateTime}</Text>
          </View>
          <View style={styles.textNotif}>
            <Text style={styles.texttextAlignVertical}>
              {temp.Title.length < 44 ? temp.Title : temp.Title.slice(0, 44)}
              {temp.Title.length < 44 ? temp.Title : "..."}
            </Text>
          </View>
        </View>
      );
    });
  }
}

formNotif.propTypes = {
  data: PropTypes.array
};

export default formNotif;
