import React from "react";
import { View, Image, Button } from "react-native";
import { styles, color1 } from "../styles";
import { TextInput } from "../../components/textInput";
// import { Button } from "../../components/button";
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
      <Image
        style={{ width: 360, height: 400 }}
        // style={{ alignContent: "center" }}
        source={require("../../../assets/images/Login.jpg")}
        // width={1}
      />
      <View style={[styles.center, styles.paddingLogin]}>
        <TextInput
          label="Username"
          placeholder="username"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={35}
          value={valueUsername}
          onChangeText={onChangeTextUsername}
          marginBottom={0}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={35}
          value={valuePass}
          onChangeText={onChangeTextPass}
          secureTextEntry={true}
        />
        {/* <Button
          text="Submit"
          buttonWidth="20%"
          buttonHeight={40}
          bold
          buttonColor="white"
          textColor="black"
          onPress={onPressSubmit}
        /> */}
        <Button title="Sign In" onPress={onPressSubmit} color={color1} />
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
