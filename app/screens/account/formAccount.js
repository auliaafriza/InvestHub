import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { TextInput } from "../../components/textInput";
import { Button } from "../../components/button";
import PropTypes from "prop-types";

const formLogin = ({
  data,
  handleSave,
  onChangeTextName,
  onChangeTextEmail,
  onChangeTextPengaruhModal,
  onChangeTextKarateristikUsaha
}) => {
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
          label="Email"
          placeholder="Email"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={data.Email}
          onChangeText={onChangeTextEmail}
        />
        <TextInput
          label="Pengaruh Modal"
          placeholder="Pengaruh Modal"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={data.PengaruhModal}
          onChangeText={onChangeTextPengaruhModal}
        />
        <TextInput
          label="Karakteristik Usaha"
          placeholder="Karakteristik Usaha"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={data.KarakteristikUsaha}
          onChangeText={onChangeTextKarateristikUsaha}
        />
        <Button
          text="Simpan"
          buttonWidth="90%"
          buttonHeight={40}
          bold
          buttonColor="white"
          textColor="black"
          onPress={handleSave}
        />
      </View>
    </View>
  );
};

formLogin.propTypes = {
  data: PropTypes.object,
  handleSave: PropTypes.func,
  onChangeTextName: PropTypes.func,
  onChangeTextEmail: PropTypes.func,
  onChangeTextPengaruhModal: PropTypes.func,
  onChangeTextKarateristikUsaha: PropTypes.func
};

export default formLogin;
