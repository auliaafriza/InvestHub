import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {styles} from '../styles';
import PropTypes from 'prop-types';
import {SearchBar} from 'react-native-elements';
import {Card, CardList, CardDeals} from '../../components/card';
import {ScrollView} from 'react-native-gesture-handler';

const x = {
  Nama: 'UMKM',
  Pengguna: 'Resiko Kecil',
  umkm: 'Mikro',
  Amount: 'Rp 100.000.000,-',
};
const formDeals = ({data, handleCancel, handleDetail}) => {
  return (
    <View style={styles.container}>
      <SearchBar
        //clearIcon={this.state.searchClearIcon}
        searchIcon={true}
        //onChangeText={this._handleSearch}
        placeholder="Type Here..."
        containerStyle={styles.searcBarInputStyle}
        inputContainerStyle={styles.searcBarInputStyle}
        inputStyle={styles.searcBarInputStyle}
        underlineColorAndroid="white"
        //value={this.state.searchText}
      />
      <View style={[styles.containerForm, styles.padding20]}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
          Daftar Investasi
        </Text>
        {/* <CardDeals
          Nama="Sejahtera Bersama Dia dan keluarga kita cemara"
          Alamat="Malabar"
          label="Tanah"
          onPressCancel={handleCancel}
          onPressSeeDetail={handleDetail}
        />
        <CardDeals
          Nama="Chitcat"
          Alamat="Malabar"
          label="Kayu"
          onPressCancel={handleCancel}
          onPressSeeDetail={handleDetail}
        /> */}
        <ScrollView>
          <Card>
            <CardList
              Nama={x.Nama}
              // onPress={onPress}
              Pengguna={x.pengguna}
              type="investasi"
              Amount={x.Amount}
              umkm={x.umkm}
            />
            <CardList
              Nama={x.Nama}
              // onPress={onPress}
              Pengguna={x.pengguna}
              type="investasi"
              Amount={x.Amount}
              umkm={x.umkm}
            />
            <CardList
              Nama={x.Nama}
              // onPress={onPress}
              Pengguna={x.pengguna}
              type="investasi"
              Amount={x.Amount}
              umkm={x.umkm}
            />
            <CardList
              Nama={x.Nama}
              // onPress={onPress}
              Pengguna={x.pengguna}
              type="investasi"
              Amount={x.Amount}
              umkm={x.umkm}
            />
            <CardList
              Nama={x.Nama}
              // onPress={onPress}
              Pengguna={x.pengguna}
              type="investasi"
              Amount={x.Amount}
              umkm={x.umkm}
            />
          </Card>
        </ScrollView>
      </View>
    </View>
  );
};

formDeals.propTypes = {
  valueUsername: PropTypes.string,
  handleCancel: PropTypes.func,
  handleDetail: PropTypes.func,
};

export default formDeals;
