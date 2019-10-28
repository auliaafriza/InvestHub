import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { TextInput } from "../../components/textInput";
import { Button } from "../../components/button";
import PropTypes from "prop-types";

const formLogin = ({
  valueUsername,
  valuePass,
  onChangeTextPass,
  onChangeTextUsername,
  onPressSubmit
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.center, styles.padding40]}>
        <TextInput
          label="Username"
          placeholder="username"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueUsername}
          onChangeText={onChangeTextUsername}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valuePass}
          onChangeText={onChangeTextPass}
          secureTextEntry={true}
        />
        <Button
          text="Submit"
          buttonWidth="90%"
          buttonHeight={40}
          bold
          buttonColor="white"
          textColor="black"
          onPress={onPressSubmit}
        />
      </View>
    </View>
  );
};

formLogin.propTypes = {
  valueUsername: PropTypes.string,
  valuePass: PropTypes.string,
  onChangeTextPass: PropTypes.func,
  onChangeTextUsername: PropTypes.func,
  onPressSubmit: PropTypes.func
};

export default formLogin;
