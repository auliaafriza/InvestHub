import React from 'react';
import {View, Text} from 'react-native';
import {styles, mainColor} from '../styles';
import {Button} from '../../components/button';
import PropTypes from 'prop-types';
import MapView, {Marker} from 'react-native-maps';
import {widthMap} from '../styles';

const formHome = props => {
  const {onPress, handleInvest} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.padding20]}>
        <View style={styles.cardUserHome}>
          <View style={styles.row100}>
            <View style={[styles.width50, styles.rowStart]}>
              <Text style={[styles.text18, {color: 'black'}]}>Balance</Text>
              <Text style={[styles.text18, {color: 'black'}]}>
                Rp 200.000.000,-
              </Text>
            </View>
            <View style={[styles.width50, styles.rowStart]}>
              <View style={{marginLeft: 70}}>
                <Button
                  text="Top Up"
                  buttonWidth={70}
                  buttonHeight={40}
                  bold
                  buttonColor={mainColor}
                  textColor="white"
                  onPress={onPress}
                />
              </View>
            </View>
          </View>
          <View style={styles.cardMapView}>
            <MapView
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                }}
                title={'title'}
                description={'description'}
              />
            </MapView>
          </View>
        </View>
      </View>
      <View style={[styles.containerBottom, styles.center, {margin: 10}]}>
        <Button
          text="Invest"
          buttonWidth={widthMap}
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
  handleInvest: PropTypes.func,
};

export default formHome;
