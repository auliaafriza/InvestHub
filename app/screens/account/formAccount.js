import React from "react";
import { View } from "react-native";
import { styles, black } from "../styles";
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
      <View style={[styles.containerForm, styles.padding40]}>
        <TextInput
          label="Nama"
          placeholder="Nama"
          required={false}
          border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.Name}
          onChangeText={onChangeTextName}
          ColorborderBottom={black}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          required={false}
          border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.Email}
          onChangeText={onChangeTextEmail}
          ColorborderBottom={black}
        />
        <TextInput
          label="Pengaruh Modal"
          placeholder="Pengaruh Modal"
          required={false}
          border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.PengaruhModal}
          onChangeText={onChangeTextPengaruhModal}
          ColorborderBottom={black}
        />
        <TextInput
          label="Karakteristik Usaha"
          placeholder="Karakteristik Usaha"
          required={false}
          border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.KarakteristikUsaha}
          onChangeText={onChangeTextKarateristikUsaha}
          ColorborderBottom={black}
        />
        <View style={[styles.row100, styles.rowEnd]}>
          <Button
            text="Simpan"
            buttonWidth="50%"
            buttonHeight={40}
            bold
            buttonColor="white"
            textColor="black"
            onPress={handleSave}
            radiusBorder={0}
          />
        </View>
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
