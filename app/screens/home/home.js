// // import React, {Component} from 'react';
// // import FormHome from './formHome';
// // import {View, Button, Text, ActivityIndicator} from 'react-native';
// // import ModalExample from './modalTopUp';
// // import {styles, mainColor} from '../styles';
// // import GeofenceTask, {getEventHistory, clearEventHistory} from './geoFenceTask';
// // import * as Permissions from 'expo-permissions';
// // import MapView, {Marker, Circle} from 'react-native-maps';

// // Permissions.askAsync(Permissions.LOCATION);
// // GeofenceTask.startAsync();
// // const SPACE = 0.01;
// // class home extends Component {
// //   state = {
// //     modalVisible: false,
// //     eventHistory: [],
// //     currentLatitude: 0,
// //     currentLongitude: 0,
// //     loading: false,
// //     circle: {
// //       center: {
// //         // latitude: -6.5727835,
// //         // longitude: 106.8272846,
// //         latitude: 0,
// //         longitude: 0,
// //       },
// //       radius: 500,
// //     },
// //   };
// //   componentDidMount = () => {
// //     this.setState({loading: true});
// //     this.getGeofenceHistory();
// //     navigator.geolocation.getCurrentPosition(
// //       //Will give you the current location
// //       position => {
// //         //getting the Longitude from the location json
// //         this.setState({
// //           currentLongitude: position.coords.longitude,
// //           currentLatitude: position.coords.latitude,
// //           circle: {
// //             center: {
// //               latitude: position.coords.latitude,
// //               longitude: position.coords.longitude,
// //             },
// //             radius: 500,
// //           },
// //         });
// //       },
// //       error => alert(error.message),
// //       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
// //     );
// //     this.watchID = navigator.geolocation.watchPosition(position => {
// //       const currentLongitude = JSON.stringify(position.coords.longitude);
// //       const currentLatitude = JSON.stringify(position.coords.latitude);
// //       this.setState({
// //         currentLongitude: position.coords.longitude,
// //         currentLatitude: position.coords.latitude,
// //       });
// //     });
// //     this.setState({loading: false});
// //   };
// //   setModalVisible = () => {
// //     const {modalVisible} = this.state;
// //     this.setState({modalVisible: !modalVisible});
// //   };
// //   getGeofenceHistory = async () => {
// //     const geofenceEvents = await getEventHistory();
// //     console.log(geofenceEvents);
// //     this.setState({eventHistory: geofenceEvents});
// //   };

// //   clearGeofenceHistory = async () => {
// //     await clearEventHistory();
// //     this.setState({eventHistory: []});
// //   };

// //   render() {
// //     const {
// //       modalVisible,
// //       circle,
// //       currentLatitude,
// //       currentLongitude,
// //       eventHistory,
// //     } = this.state;
// //     console.log(eventHistory);
// //     return (
// //       <React.Fragment>
// //         {this.state.loading ? (
// //           <ActivityIndicator size="large" color="#0000ff" />
// //         ) : (
// //           <View style={styles.container}>
// //             <View style={styles.container}>
// //               <View style={[styles.center, styles.padding20]}>
// //                 <View style={styles.cardUserHome}>
// //                   <View style={styles.row100}>
// //                     <View style={[styles.width50, styles.rowStart]}>
// //                       <Text style={[styles.text18, {color: 'black'}]}>
// //                         Balance
// //                       </Text>
// //                       <Text style={[styles.text18, {color: 'black'}]}>
// //                         Rp 200.000.000,-
// //                       </Text>
// //                     </View>
// //                     <View style={[styles.width50, styles.rowStart]}>
// //                       <View style={{marginLeft: 70}}>
// //                         <Button
// //                           onPress={this.setModalVisible}
// //                           title="Top Up"
// //                           color={mainColor}
// //                         />
// //                         <Button
// //                           onPress={this.getGeofenceHistory}
// //                           title="Refresh"
// //                           color="#FF0000"
// //                         />
// //                       </View>
// //                     </View>
// //                   </View>
// //                   <View style={styles.cardMapView}>
// //                     {currentLatitude !== 0 && currentLongitude !== 0 && (
// //                       <MapView
// //                         style={{
// //                           width: '100%',
// //                           height: '100%',
// //                           borderRadius: 10,
// //                           borderWidth: 1,
// //                           borderColor: 'black',
// //                         }}
// //                         zoomTapEnabled={true}
// //                         zoomEnabled={true}
// //                         zoomControlEnabled={true}
// //                         initialRegion={{
// //                           latitude: currentLatitude,
// //                           longitude: currentLongitude,

// //                           latitudeDelta: 1,
// //                           longitudeDelta: 1,
// //                         }}
// //                         initialCamera={{
// //                           center: {
// //                             latitude: currentLatitude,
// //                             longitude: currentLongitude,
// //                           },
// //                           pitch: 45,
// //                           heading: 90,
// //                           altitude: 1000,
// //                           zoom: 15,
// //                         }}
// //                       >
// //                         <Marker
// //                           coordinate={{
// //                             latitude: currentLatitude,
// //                             longitude: currentLongitude,
// //                             latitudeDelta: 1,
// //                             longitudeDelta: 1,
// //                           }}
// //                           title={'title'}
// //                           description={'description'}
// //                         />
// //                         <Circle
// //                           center={circle.center}
// //                           radius={circle.radius}
// //                           fillColor="rgba(255,102,102,0.3)"
// //                           strokeColor="rgba(255,102,102,0.3)"
// //                           zIndex={2}
// //                           strokeWidth={2}
// //                         />
// //                       </MapView>
// //                     )}
// //                   </View>
// //                 </View>
// //               </View>
// //             </View>

// //             <ModalExample
// //               modalVisible={modalVisible}
// //               onPress={() =>
// //                 this.setState({
// //                   modalVisible: !modalVisible,
// //                 })
// //               }
// //             />
// //           </View>
// //         )}
// //       </React.Fragment>
// //     );
// //   }
// // }

// // export default home;

// import React, {Component} from 'react';
// // import PropTypes from 'prop-types';
// import ModalExample from './modalTopUp';
// import {styles, mainColor} from '../styles';
// import {
//   View,
//   Button,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import MapView, {Marker, Circle} from 'react-native-maps';
// import Geofence from 'react-native-expo-geofence';
// var fakePoints = [
//   {key: 1, latitude: -6.588762, longitude: 106.816613, title: 'Itaú CEIC'},
//   {key: 2, latitude: -6.587967, longitude: 106.816557, title: 'Temakão'},
//   {key: 3, latitude: -6.588225, longitude: 106.816585, title: "McDonald's"},
//   {key: 4, latitude: -6.587681, longitude: 106.816125, title: 'Correios'},
// ];
// class home extends Component {
//   constructor(props) {
//     super(props);
//     Geofence.Log = true;
//     this.state = {
//       distance: 700,
//       showCircle: true,
//       markers: [],
//       currentPosition: {
//         latitude: -6.5885009,
//         longitude: 106.8168241,
//         latitudeDelta: 0.0171,
//         longitudeDelta: 0.0108,
//       },
//     };
//   }
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       //Will give you the current location
//       position => {
//         //getting the Longitude from the location json
//         // let curpos = {
//         //   latitude: position.coords.latitude,
//         //   longitude: position.coords.longitude,
//         //   latitudeDelta: 0.0171,
//         //   longitudeDelta: 0.0108,
//         // };
//         var markers = Geofence.filterByProximity(
//           this.state.currentPosition,
//           fakePoints,
//           this.state.distance / 1000
//         );
//         this.setState({
//           // currentPosition: curpos,
//           markers,
//         });
//       },
//       error => alert(error.message),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
//     );
//   }

//   handleDecrease() {
//     if (this.state.distance == 700) {
//       this.changeDistance(500);
//     } else if (this.state.distance == 1000) {
//       this.changeDistance(700);
//     } else if (this.state.distance == 5000) {
//       this.changeDistance(1000);
//     }
//   }

//   handleIncrease() {
//     if (this.state.distance == 500) {
//       this.changeDistance(700);
//     } else if (this.state.distance == 700) {
//       this.changeDistance(1000);
//     } else if (this.state.distance == 1000) {
//       this.changeDistance(5000);
//     }
//   }

//   changeDistance(value) {
//     var _this = this;
//     this.setState({distance: value, showCircle: false}, function() {
//       var markers = Geofence.filterByProximity(
//         _this.region,
//         fakePoints,
//         _this.state.distance / 1000
//       );
//       _this.setState({markers: markers, showCircle: true});
//     });
//   }

//   setModalVisible = () => {
//     const {modalVisible} = this.state;
//     this.setState({modalVisible: !modalVisible});
//   };

//   render() {
//     const {modalVisible} = this.state;
//     return (
//       <React.Fragment>
//         {this.state.loading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : (
//           <View style={styles.container}>
//             <View style={styles.container}>
//               <View style={[styles.center, styles.padding20]}>
//                 <View style={styles.cardUserHome}>
//                   <View style={styles.row100}>
//                     <View style={[styles.width50, styles.rowStart]}>
//                       <Text style={[styles.text18, {color: 'black'}]}>
//                         Balance
//                       </Text>
//                       <Text style={[styles.text18, {color: 'black'}]}>
//                         Rp 200.000.000,-
//                       </Text>
//                     </View>
//                     <View style={[styles.width50, styles.rowStart]}>
//                       <View style={{marginLeft: 70}}>
//                         <Button
//                           onPress={this.setModalVisible}
//                           title="Top Up"
//                           color={mainColor}
//                         />
//                         <Button
//                           onPress={this.getGeofenceHistory}
//                           title="Refresh"
//                           color="#FF0000"
//                         />
//                       </View>
//                     </View>
//                   </View>
//                   <View style={styles.cardMapView}>
//                     <View style={stylesMap.container}>
//                       <MapView
//                         style={stylesMap.map}
//                         initialRegion={this.state.currentPosition}
//                       >
//                         {this.state.showCircle ? (
//                           <MapView.Circle
//                             center={this.state.currentPosition}
//                             radius={this.state.distance}
//                             strokeColor="transparent"
//                             fillColor="rgba(0, 100, 180, 0.2)"
//                           />
//                         ) : null}
//                         <MapView.Marker
//                           coordinate={this.state.currentPosition}
//                           title="me"
//                           description={null}
//                         >
//                           <View style={stylesMap.meStyle} />
//                         </MapView.Marker>
//                         {this.state.markers.map((marker, index) => (
//                           <MapView.Marker
//                             key={index}
//                             coordinate={marker}
//                             title={marker.title}
//                             description={null}
//                           />
//                         ))}
//                       </MapView>
//                       <View style={stylesMap.controlsContainer}>
//                         <TouchableOpacity
//                           onPress={this.handleDecrease.bind(this)}
//                           style={stylesMap.button}
//                         >
//                           <Text style={stylesMap.buttonText}>-</Text>
//                         </TouchableOpacity>
//                         <Text style={stylesMap.distanceText}>
//                           {this.state.distance > 999
//                             ? this.state.distance / 1000 + ' KM'
//                             : this.state.distance + ' m'}
//                         </Text>
//                         <TouchableOpacity
//                           onPress={this.handleIncrease.bind(this)}
//                           style={stylesMap.button}
//                         >
//                           <Text style={stylesMap.buttonText}>+</Text>
//                         </TouchableOpacity>
//                       </View>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             </View>

//             <ModalExample
//               modalVisible={modalVisible}
//               onPress={() =>
//                 this.setState({
//                   modalVisible: !modalVisible,
//                 })
//               }
//             />
//           </View>
//         )}
//       </React.Fragment>
//     );
//   }
// }

// export default home;

// // define your styles
// const stylesMap = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   distanceText: {
//     flex: 3,
//     textAlign: 'center',
//     color: '#FFF',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 30,
//   },
//   controlsContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: 80,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   meStyle: {
//     width: 15,
//     height: 15,
//     borderRadius: 8,
//     backgroundColor: '#67c0ff',
//     opacity: 0.8,
//     borderWidth: 2,
//     borderColor: '#dbdbdb',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MapView} from 'expo';
import Geofence from 'react-native-expo-geofence';

var fakePoints = [
  {
    key: 1,
    latitude: -6.588762,
    longitude: 106.816613,
    title: 'Bakso Misterius',
  },
  {
    key: 2,
    latitude: -6.587967,
    longitude: 106.816557,
    title: 'Dailydose Coffee & Eatery',
  },
  {
    key: 3,
    latitude: -6.588225,
    longitude: 106.816585,
    title: 'Kedai Makan Dapur Cihuuyy',
  },
  {
    key: 4,
    latitude: -6.587681,
    longitude: 106.816125,
    title: 'Bakso PMI Panduraya',
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    Geofence.Log = true;
    this.state = {
      distance: 700,
      showCircle: true,
      markers: [],
      region: {
        latitude: -6.5885009,
        longitude: 106.8168241,
        latitudeDelta: 0.0171,
        longitudeDelta: 0.0108,
      },
    };

    // console.disableYellowBox = true;
  }

  componentDidMount() {
    // var markers = Geofence.filterByProximity(
    //   this.state.region,
    //   fakePoints,
    //   this.state.distance / 1000
    // );
    // this.setState({markers});
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Longitude from the location json
        let curpos = {
          latitude: -6.5885009,
          longitude: 106.8168241,
          latitudeDelta: 0.0171,
          longitudeDelta: 0.0108,
        };
        var markers = Geofence.filterByProximity(
          curpos,
          fakePoints,
          this.state.distance / 1000
        );
        this.setState({
          region: curpos,
          markers,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    console.log(this.state);
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
        _this.state.region,
        fakePoints,
        _this.state.distance / 1000
      );
      _this.setState({markers: markers, showCircle: true});
    });
  }

  render() {
    const {region} = this.state;
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={region}>
          {this.state.showCircle ? (
            <MapView.Circle
              center={region}
              radius={this.state.distance}
              strokeColor="transparent"
              fillColor="rgba(0, 100, 180, 0.2)"
            />
          ) : null}
          <MapView.Marker coordinate={region} title="me" description={null}>
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
    );
  }
}

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
