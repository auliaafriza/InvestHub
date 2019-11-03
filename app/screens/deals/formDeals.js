import React from "react";
import { View, Text, StatusBar } from "react-native";
import { styles } from "../styles";
import { CardDeals } from "../../components/card";
import PropTypes from "prop-types";
import { SearchBar } from "react-native-elements";

const formDeals = ({ data, handleCancel, handleDetail }) => {
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
      <View style={[styles.containerForm, styles.padding40]}>
        <Text style={{ fontWeight: "bold" }}>List Of Investasi</Text>
        <CardDeals
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
        />
      </View>
    </View>
  );
};

formDeals.propTypes = {
  valueUsername: PropTypes.string,
  handleCancel: PropTypes.func,
  handleDetail: PropTypes.func
};

export default formDeals;
