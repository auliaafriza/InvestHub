import React from "react";
import { View, Button } from "react-native";
import { styles, black, color1 } from "../styles";
import { TextInput } from "../../components/textInput";
// import { Button } from "../../components/button";
import PropTypes from "prop-types";

const formLogin = ({
  data,
  handleSave,
  onChangeTextName,
  onChangeTextEmail,
  onChangeTextPengaruhModal,
  onChangeTextKarateristikUsaha,
  handleLogout
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.padding40]}>
        <TextInput
          label="Nama"
          placeholder="Nama"
          required={false}
          //border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.Name}
          onChangeText={onChangeTextName}
          ColorborderBottom={black}
          required={true}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          required={false}
          //border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.Email}
          onChangeText={onChangeTextEmail}
          ColorborderBottom={black}
          required={true}
        />
        <TextInput
          label="Pengaruh Modal"
          placeholder="Pengaruh Modal"
          required={false}
          //border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.PengaruhModal}
          onChangeText={onChangeTextPengaruhModal}
          ColorborderBottom={black}
          required={true}
        />
        <TextInput
          label="Karakteristik Usaha"
          placeholder="Karakteristik Usaha"
          required={false}
          //border={false}
          containerWidth="100%"
          containerHeight={45}
          value={data.KarakteristikUsaha}
          onChangeText={onChangeTextKarateristikUsaha}
          ColorborderBottom={black}
          required={true}
        />
        <View style={[styles.row100, styles.rowEnd]}>
          {/* <Button
            text="Simpan"
            buttonWidth="20%"
            buttonHeight={40}
            bold
            buttonColor="white"
            textColor="black"
            onPress={handleSave}
            radiusBorder={0}
          /> */}
        </View>
        {/* <Button
          text="Logout"
          buttonWidth="20%"
          buttonHeight={40}
          bold
          buttonColor="white"
          textColor="red"
          onPress={handleLogout}
          radiusBorder={0}
          setToBottom={true}
        /> */}
        <Button title="Simpan" onPress={handleSave} color={color1} />
      </View>
      <View style={[styles.containerBottom, styles.padding40]}>
        <Button title="Keluar" onPress={handleLogout} color="#fb3838" />
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
