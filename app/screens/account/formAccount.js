import React from 'react';
import {View, Button, Picker} from 'react-native';
import {styles, black, color1} from '../styles';
import {TextInput, DropDown} from '../../components/textInput';
// import { Button } from "../../components/button";
import PropTypes from 'prop-types';

const pengaruhModal = [
  {
    Id: 'rendah',
    Nama: 'Resiko Rendah',
  },
  {
    Id: 'sedang',
    Nama: 'Resiko Sedang',
  },
  {
    Id: 'tinggi',
    Nama: 'Resiko Tinggi',
  },
];

const karateristikUsaha = [
  {
    Id: 'rumahan',
    Nama: 'UMKM skala rumahan',
  },
  {
    Id: 'tempatusaha',
    Nama: 'UMKM skala bertempat usaha',
  },
  {
    Id: 'produksi',
    Nama: 'UMKM skala produksi',
  },
];

const formLogin = ({
  data,
  handleSave,
  onChangeTextName,
  onChangeTextEmail,
  onChangeTextPengaruhModal,
  onChangeTextKarateristikUsaha,
  handleLogout,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.padding40]}>
        <TextInput
          label="Nama"
          placeholder="Nama"
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
          containerWidth="100%"
          containerHeight={45}
          value={data.Email}
          onChangeText={onChangeTextEmail}
          ColorborderBottom={black}
          required={true}
        />
        <DropDown
          label="Pengaruh Modal"
          required={true}
          datadropDown={pengaruhModal}
          onValueChange={onChangeTextPengaruhModal}
          value={data.PengaruhModal}
        />
        <DropDown
          label="Karakteristik Usaha"
          required={true}
          datadropDown={karateristikUsaha}
          onValueChange={onChangeTextKarateristikUsaha}
          value={data.KarakteristikUsaha}
        />
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
  onChangeTextKarateristikUsaha: PropTypes.func,
};

export default formLogin;
