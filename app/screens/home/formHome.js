import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import { Button } from "../../components/button";
import PropTypes from "prop-types";
import MapView, { Marker } from "react-native-maps";

const formHome = ({ handleInvest }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerForm, styles.center, styles.padding20]}>
        <View style={styles.cardUserHome}>
          <View style={styles.row100}>
            <View style={[styles.width50, styles.rowStart]}>
              <Text style={styles.text18}>Hi, Mr User</Text>
            </View>
            <View style={[styles.width50, styles.rowStart]}>
              <Text style={styles.text18}>Saldo</Text>
              <Text style={styles.text18}>Rp 200.000.000,-</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardMapView}>
          <MapView
            style={styles.stylesMap}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title={"title"}
              description={"description"}
            />
          </MapView>
        </View>
        <Button
          text="Invest"
          buttonWidth="90%"
          buttonHeight={40}
          bold
          buttonColor="white"
          textColor="black"
          onPress={handleInvest}
        />
      </View>
    </View>
  );
};

formHome.propTypes = {
  handleInvest: PropTypes.func
};

export default formHome;
