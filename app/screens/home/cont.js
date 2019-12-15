import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import ModalExample from './modalTopUp';
import {styles, mainColor} from '../styles';
import {View, Button, Text, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
var fakePoints = [
  {key: 1, latitude: -6.588762, longitude: 106.816613, title: 'Itaú CEIC'},
  {key: 2, latitude: -6.587967, longitude: 106.816557, title: 'Temakão'},
  {key: 3, latitude: -6.588225, longitude: 106.816585, title: "McDonald's"},
  {key: 4, latitude: -6.587681, longitude: 106.816125, title: 'Correios'},
];
class home extends Component {
  constructor(props) {
    super(props);
    Geofence.Log = true;
    this.state = {
      distance: 700,
      showCircle: true,
      markers: [],
      currentPosition: {
        latitude: -6.5885009,
        longitude: 106.8168241,
        latitudeDelta: 0.0171,
        longitudeDelta: 0.0108,
      },
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Longitude from the location json
        // let curpos = {
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        //   latitudeDelta: 0.0171,
        //   longitudeDelta: 0.0108,
        // };
        var markers = Geofence.filterByProximity(
          this.state.currentPosition,
          fakePoints,
          this.state.distance / 1000
        );
        this.setState({
          //   currentPosition: curpos,
          markers,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  handleDecrease() {
    if (this.state.distance == 700) {
      this.changeDistance(500);
    } else if (this.state.distance == 1000) {
      this.changeDistance(700);
    } else if (this.state.distance == 5000) {
      this.changeDistance(1000);
    }
  }

  handleIncrease() {
    if (this.state.distance == 500) {
      this.changeDistance(700);
    } else if (this.state.distance == 700) {
      this.changeDistance(1000);
    } else if (this.state.distance == 1000) {
      this.changeDistance(5000);
    }
  }

  changeDistance(value) {
    var _this = this;
    this.setState({distance: value, showCircle: false}, function() {
      var markers = Geofence.filterByProximity(
        _this.region,
        fakePoints,
        _this.state.distance / 1000
      );
      _this.setState({markers: markers, showCircle: true});
    });
  }

  setModalVisible = () => {
    const {modalVisible} = this.state;
    this.setState({modalVisible: !modalVisible});
  };

  render() {
    const {modalVisible} = this.state;
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
                    <View style={styles.container}>
                      <MapView
                        style={styles.map}
                        initialRegion={this.state.currentPosition}
                      >
                        {this.state.showCircle ? (
                          <MapView.Circle
                            center={this.state.currentPosition}
                            radius={this.state.distance}
                            strokeColor="transparent"
                            fillColor="rgba(0, 100, 180, 0.2)"
                          />
                        ) : null}
                        <MapView.Marker
                          coordinate={this.state.currentPosition}
                          title="me"
                          description={null}
                        >
                          <View style={styles.meStyle} />
                        </MapView.Marker>
                        {this.state.markers.map((marker, index) => (
                          <MapView.Marker
                            key={index}
                            coordinate={marker}
                            title={marker.title}
                            description={null}
                          />
                        ))}
                      </MapView>
                      <View style={styles.controlsContainer}>
                        <TouchableOpacity
                          onPress={this.handleDecrease.bind(this)}
                          style={styles.button}
                        >
                          <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.distanceText}>
                          {this.state.distance > 999
                            ? this.state.distance / 1000 + ' KM'
                            : this.state.distance + ' m'}
                        </Text>
                        <TouchableOpacity
                          onPress={this.handleIncrease.bind(this)}
                          style={styles.button}
                        >
                          <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
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

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceText: {
    flex: 3,
    textAlign: 'center',
    color: '#FFF',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  meStyle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#67c0ff',
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#dbdbdb',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
