//This is an example code to get Geolocation//
import React from 'react';
//import react in our code.

import {View, Text, StyleSheet, Image} from 'react-native';
//import all the components we are going to use.

export default class geoLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLongitude: 'unknown', //Initial Longitude
      currentLatitude: 'unknown', //Initial Latitude
    };
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        this.setState({currentLongitude: currentLongitude});
        //Setting state Longitude to re re-render the Longitude Text
        this.setState({currentLatitude: currentLatitude});
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      //Will give you the location on location change
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
      this.setState({currentLongitude: currentLongitude});
      //Setting state Longitude to re re-render the Longitude Text
      this.setState({currentLatitude: currentLatitude});
      //Setting state Latitude to re re-render the Longitude Text
    });
  };
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://png.icons8.com/dusk/100/000000/compass.png',
          }}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.boldText}>You are Here</Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
        >
          Longitude: {this.state.currentLongitude}
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
        >
          Latitude: {this.state.currentLatitude}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
});
