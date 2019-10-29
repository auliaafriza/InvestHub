import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { TextInput } from "../../components/textInput";
import { Button } from "../../components/button";
import PropTypes from "prop-types";

const formLogin = ({ data, handleInvest }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.center, styles.padding40]}>
        <TextInput
          label="Name"
          placeholder="Name"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={data.Name}
          onChangeText={onChangeTextName}
        />
        <TextInput
          label="Alamat"
          placeholder="Alamat"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={data.Email}
          onChangeText={onChangeTextEmail}
        />
        <Button
          text="Invest"
          buttonWidth="90%"
          buttonHeight={40}
          bold
          buttonColor="white"
          textColor="black"
          onPress={handleInvest}
        />
      </View>
    </View>
  );
};

formLogin.propTypes = {
  data: PropTypes.object,
  handleInvest: PropTypes.func
};

export default formLogin;
