import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import {AsyncStorage} from 'react-native';

const TASK_NAME = 'GEOFENCE_TEST_TASK';
TaskManager.defineTask(TASK_NAME, ({data: {eventType, region}, error}) => {
  if (error) {
    console.log(error);
    return;
  }
  if (eventType === Location.GeofencingEventType.Enter) {
    console.log("You've entered region:", region);
  } else if (eventType === Location.GeofencingEventType.Exit) {
    console.log("You've left region:", region);
  }

  _storeEvent(
    new Date().toISOString(),
    JSON.stringify({eventType: eventType, region: region.identifier})
  );
});

const _storeEvent = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

const getEventHistory = async () => {
  let history = [];
  const keys = await AsyncStorage.getAllKeys((err, keys) => {});
  await AsyncStorage.multiGet(keys, (err, stores) => {
    history = stores.map((result, i, store) => {
      return {key: store[i][0], value: JSON.parse(store[i][1])};
    });
  });
  return history;
};

const clearEventHistory = async () => {
  const keys = await AsyncStorage.getAllKeys((err, keys) => {});
  AsyncStorage.multiRemove(keys, err => {});
};

const buildRegions = () => {
  // navigator.geolocation.getCurrentPosition(
  //   //Will give you the current location
  //   position => {
  //     // let currentLongitude = position.coords.longitude;
  //     // let currentLatitude = position.coords.latitude;
  //     return [
  //       {
  //         identifier: 'north_pole',
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         radius: 500,
  //         notifyOnEnter: true,
  //         notifyOnExit: true,
  //       },
  //     ];
  //   },
  //   error => alert(error.message),
  //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  // );

  return [
    {
      identifier: 'north_pole',
      latitude: currentLatitude,
      longitude: currentLongitude,
      radius: 500,
      notifyOnEnter: true,
      notifyOnExit: true,
    },
    ,
    {
      identifier: 'market_st',
      latitude: 37.78270986195718,
      longitude: -122.40972697734833,
      radius: 500,
      notifyOnEnter: true,
      notifyOnExit: true,
    },
  ];
};

const geoFenceTask = {
  startAsync: async () => {
    console.log('Starting GeoFenceTask');
    // Make sure user has granted permission.
    const permission = await Permissions.getAsync(Permissions.LOCATION);
    if (permission.status !== 'granted') {
      console.log('Needs Location Permission');
      return;
    }
    const regions = buildRegions();

    console.log('Adding regions: ', regions);

    // Update or start geofencing task
    return Location.startGeofencingAsync(TASK_NAME, regions);
  },

  stopAsync: async () => {
    return Location.stopGeofencingAsync(TASK_NAME);
  },
};

export default geoFenceTask;
export {getEventHistory, clearEventHistory};
