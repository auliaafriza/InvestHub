import React, {Component} from 'react';
import FormHome from './formHome';
import {View, Button, Text, ActivityIndicator} from 'react-native';
import ModalExample from './modalTopUp';
import {styles, mainColor} from '../styles';
import GeofenceTask, {getEventHistory, clearEventHistory} from './geoFenceTask';
import * as Permissions from 'expo-permissions';
import MapView, {Marker, Circle} from 'react-native-maps';

Permissions.askAsync(Permissions.LOCATION);
GeofenceTask.startAsync();
const SPACE = 0.01;
class home extends Component {
  state = {
    modalVisible: false,
    eventHistory: [],
    currentLatitude: 0,
    currentLongitude: 0,
    loading: false,
    circle: {
      center: {
        // latitude: -6.5727835,
        // longitude: 106.8272846,
        latitude: 0,
        longitude: 0,
      },
      radius: 500,
    },
  };
  componentDidMount = () => {
    this.setState({loading: true});
    this.getGeofenceHistory();
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Longitude from the location json
        this.setState({
          currentLongitude: position.coords.longitude,
          currentLatitude: position.coords.latitude,
          circle: {
            center: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            radius: 500,
          },
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      this.setState({
        currentLongitude: position.coords.longitude,
        currentLatitude: position.coords.latitude,
      });
    });
    this.setState({loading: false});
  };
  setModalVisible = () => {
    const {modalVisible} = this.state;
    this.setState({modalVisible: !modalVisible});
  };
  getGeofenceHistory = async () => {
    const geofenceEvents = await getEventHistory();
    console.log(geofenceEvents);
    this.setState({eventHistory: geofenceEvents});
  };

  clearGeofenceHistory = async () => {
    await clearEventHistory();
    this.setState({eventHistory: []});
  };

  render() {
    const {
      modalVisible,
      circle,
      currentLatitude,
      currentLongitude,
      eventHistory,
    } = this.state;
    console.log(eventHistory);
    return (
      <React.Fragment>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.container}>
            <View style={styles.container}>
              <View style={[styles.center, styles.padding20]}>
                <View style={styles.cardUserHome}>
                  <View style={styles.row100}>
                    <View style={[styles.width50, styles.rowStart]}>
                      <Text style={[styles.text18, {color: 'black'}]}>
                        Balance
                      </Text>
                      <Text style={[styles.text18, {color: 'black'}]}>
                        Rp 200.000.000,-
                      </Text>
                    </View>
                    <View style={[styles.width50, styles.rowStart]}>
                      <View style={{marginLeft: 70}}>
                        <Button
                          onPress={this.setModalVisible}
                          title="Top Up"
                          color={mainColor}
                        />
                        <Button
                          onPress={this.getGeofenceHistory}
                          title="Refresh"
                          color="#FF0000"
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardMapView}>
                    {currentLatitude !== 0 && currentLongitude !== 0 && (
                      <MapView
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: 'black',
                        }}
                        zoomTapEnabled={true}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        initialRegion={{
                          latitude: currentLatitude,
                          longitude: currentLongitude,

                          latitudeDelta: 1,
                          longitudeDelta: 1,
                        }}
                        initialCamera={{
                          center: {
                            latitude: currentLatitude,
                            longitude: currentLongitude,
                          },
                          pitch: 45,
                          heading: 90,
                          altitude: 1000,
                          zoom: 15,
                        }}
                      >
                        <Marker
                          coordinate={{
                            latitude: currentLatitude,
                            longitude: currentLongitude,
                            latitudeDelta: 1,
                            longitudeDelta: 1,
                          }}
                          title={'title'}
                          description={'description'}
                        />
                        <Circle
                          center={circle.center}
                          radius={circle.radius}
                          fillColor="rgba(255,102,102,0.3)"
                          strokeColor="rgba(255,102,102,0.3)"
                          zIndex={2}
                          strokeWidth={2}
                        />
                      </MapView>
                    )}
                  </View>
                </View>
              </View>
            </View>

            <ModalExample
              modalVisible={modalVisible}
              onPress={() =>
                this.setState({
                  modalVisible: !modalVisible,
                })
              }
            />
          </View>
        )}
      </React.Fragment>
    );
  }
}

export default home;
