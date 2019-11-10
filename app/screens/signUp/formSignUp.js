import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { TextInput } from "../../components/textInput";
import { Button } from "../../components/button";
import PropTypes from "prop-types";

const formSignUp = ({
  valueNamaUsaha,
  valueAlamat,
  valueJenisUsaha,
  valueNPWP,
  valueSIUP,
  valueEmail,
  valuePhoneNumber,
  onChangeTextNamaUsaha,
  onChangeTextAlamat,
  onChangeTextJenisUsaha,
  onChangeTextNPWP,
  onChangeTextSIUP,
  onChangeTextEmail,
  onChangeTextPhoneNumber,
  onPressSubmit
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.center, styles.padding40]}>
        <TextInput
          label="Nama Usaha"
          placeholder="Nama Usaha"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueNamaUsaha}
          onChangeText={onChangeTextNamaUsaha}
        />
        <TextInput
          label="Alamat"
          placeholder="Alamat"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueAlamat}
          onChangeText={onChangeTextAlamat}
        />
        <TextInput
          label="Jenis Usaha"
          placeholder="Jenis Usaha"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueJenisUsaha}
          onChangeText={onChangeTextJenisUsaha}
        />
        <TextInput
          label="NPWP"
          placeholder="NPWP"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueNPWP}
          onChangeText={onChangeTextNPWP}
        />
        <TextInput
          label="SIUP"
          placeholder="SIUP"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueSIUP}
          onChangeText={onChangeTextSIUP}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valueEmail}
          onChangeText={onChangeTextEmail}
        />
        <TextInput
          label="Phone Number"
          placeholder="Phone Number"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={45}
          value={valuePhoneNumber}
          onChangeText={onChangeTextPhoneNumber}
        />
        <Button
          text="Submit"
          buttonWidth="70%"
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

formSignUp.propTypes = {
  valueNamaUsaha: PropTypes.string,
  valueAlamat: PropTypes.string,
  valueJenisUsaha: PropTypes.string,
  valueNPWP: PropTypes.string,
  valueSIUP: PropTypes.string,
  valueEmail: PropTypes.string,
  valuePhoneNumber: PropTypes.string,
  onChangeTextNamaUsaha: PropTypes.func,
  onChangeTextAlamat: PropTypes.func,
  onChangeTextJenisUsaha: PropTypes.func,
  onChangeTextNPWP: PropTypes.func,
  onChangeTextSIUP: PropTypes.func,
  onChangeTextEmail: PropTypes.func,
  onChangeTextPhoneNumber: PropTypes.func,
  onPressSubmit: PropTypes.func
};

export default formSignUp;
