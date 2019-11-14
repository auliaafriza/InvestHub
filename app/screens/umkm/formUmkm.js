import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {Card, CardList} from '../../components/card';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native-gesture-handler';

const formUmkm = ({Nama, onPress, PengaruhModal, Skala, alamat, status}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.padding20]}>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          List UMKM
        </Text>
        <ScrollView>
          <Card>
            <CardList
              Nama={Nama}
              onPress={onPress}
              PengaruhModal={PengaruhModal}
              Skala={Skala}
              alamat={alamat}
              status={status}
              type="umkm"
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              PengaruhModal={PengaruhModal}
              Skala={Skala}
              alamat={alamat}
              status={status}
              type="umkm"
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              PengaruhModal={PengaruhModal}
              Skala={Skala}
              alamat={alamat}
              status={status}
              type="umkm"
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              PengaruhModal={PengaruhModal}
              Skala={Skala}
              alamat={alamat}
              status={status}
              type="umkm"
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              PengaruhModal={PengaruhModal}
              Skala={Skala}
              alamat={alamat}
              status={status}
              type="umkm"
            />
          </Card>
        </ScrollView>
      </View>
    </View>
  );
};

formUmkm.propTypes = {
  Nama: PropTypes.string,
  onPress: PropTypes.func,
  PengaruhModal: PropTypes.string,
  Skala: PropTypes.string,
  alamat: PropTypes.string,
  status: PropTypes.string,
};

export default formUmkm;
