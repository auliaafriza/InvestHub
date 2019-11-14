import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import {Seperator} from '../seperator';
import styles from './styles';
import {mainColor} from '../../screens/styles';
import {Button} from '../button';

const cardList = ({
  Nama,
  onPress,
  Pengguna,
  PengaruhModal,
  Balance,
  Amount,
  Skala,
  umkm,
  alamat,
  status,
  type,
}) => {
  return (
    <TouchableOpacity
      style={[styles.width100, styles.padding20]}
      onPress={onPress}
    >
      <View style={[styles.row100, styles.marginBottom10, styles.marginTop20]}>
        <View style={styles.width50}>
          <Text style={[styles.text22, styles.textBold]}>{Nama}</Text>
        </View>
        {type == 'investasi' ? null : (
          <View style={[styles.width50, styles.alignItemsEnd]}>
            <Text
              style={status == 'active' ? styles.textAktif : styles.textInAktif}
            >
              {status}
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.textStyle}>
        {type == 'investasi' ? 'Pengguna' : 'Pengaruh Modal'}
        {': '}
        {type == 'investasi' ? Pengguna : PengaruhModal}
      </Text>
      {type == 'pengguna' ? (
        <Text style={styles.textStyle}>Balance : {Balance}</Text>
      ) : type == 'investasi' ? (
        <Text style={styles.textStyle}>Amount : {Amount}</Text>
      ) : null}
      {type != 'investasi' ? (
        <Text style={styles.textStyle}>Skala Bisnis : {Skala}</Text>
      ) : (
        <Text style={styles.textStyle}>UMKM : {umkm}</Text>
      )}
      {type == 'investasi' ? null : (
        <Text style={styles.textStyle}>Alamat: {alamat}</Text>
      )}
      <TouchableOpacity
        style={[
          styles.width100,
          styles.rowEnd,
          styles.marginBottom10,
          styles.marginTop20,
        ]}
        onPress={onPress}
      >
        <Text style={{color: mainColor, fontSize: 16}}>See Detail</Text>
      </TouchableOpacity>
      <Seperator color="#ccc" width="100%" height={1} />
    </TouchableOpacity>
  );
};

cardList.propTypes = {
  onPress: PropTypes.func,
  Nama: PropTypes.string,
  Pengguna: PropTypes.string,
  PengaruhModal: PropTypes.string,
  Balance: PropTypes.string,
  Amount: PropTypes.string,
  Skala: PropTypes.string,
  umkm: PropTypes.string,
  alamat: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
};

export default cardList;
