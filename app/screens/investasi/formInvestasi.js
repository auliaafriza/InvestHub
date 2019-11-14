import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {Card, CardList} from '../../components/card';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native-gesture-handler';

const formInvestasi = ({Nama, onPress, Pengguna, Amount, umkm}) => {
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
          List Investasi
        </Text>
        <ScrollView>
          <Card>
            <CardList
              Nama={Nama}
              onPress={onPress}
              Pengguna={Pengguna}
              type="investasi"
              Amount={Amount}
              umkm={umkm}
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              Pengguna={Pengguna}
              type="investasi"
              Amount={Amount}
              umkm={umkm}
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              Pengguna={Pengguna}
              type="investasi"
              Amount={Amount}
              umkm={umkm}
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              Pengguna={Pengguna}
              type="investasi"
              Amount={Amount}
              umkm={umkm}
            />
            <CardList
              Nama={Nama}
              onPress={onPress}
              Pengguna={Pengguna}
              type="investasi"
              Amount={Amount}
              umkm={umkm}
            />
          </Card>
        </ScrollView>
      </View>
    </View>
  );
};

formInvestasi.propTypes = {
  Nama: PropTypes.string,
  onPress: PropTypes.func,
  Pengguna: PropTypes.string,
  Amount: PropTypes.string,
  umkm: PropTypes.string,
};

export default formInvestasi;
