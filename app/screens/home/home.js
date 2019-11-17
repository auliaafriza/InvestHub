import React, {Component} from 'react';
import FormHome from './formHome';
// import NavigationIcon from "../navigationIcon/Navigation";
import {View, Button} from 'react-native';
import ModalExample from './modalTopUp';
import {styles} from '../styles';
import GeofenceTask, {getEventHistory, clearEventHistory} from './geoFenceTask';
import * as Permissions from 'expo-permissions';

Permissions.askAsync(Permissions.LOCATION);
GeofenceTask.startAsync();

class home extends Component {
  state = {
    modalVisible: false,
    eventHistory: [],
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
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
    const {modalVisible} = this.state;
    return (
      <View style={styles.container}>
        <FormHome
          onPress={() =>
            this.setState({
              modalVisible: !modalVisible,
            })
          }
        />
        <ModalExample
          modalVisible={modalVisible}
          onPress={() =>
            this.setState({
              modalVisible: !modalVisible,
            })
          }
        />
        <Text>{`Event History length ${eventHistory.length}`}</Text>
        <FlatList
          data={eventHistory}
          renderItem={({item}) => (
            <Text>{`${item.key} | ${
              item.value.eventType === 1 ? 'ENTER' : 'EXIT'
            } | ${item.value.region}`}</Text>
          )}
        />
        <Button
          onPress={this.getGeofenceHistory}
          title="Refresh History"
          color="#FF0000"
        />
        <Button
          onPress={this.clearGeofenceHistory}
          title="Clear History"
          color="#0000FF"
        />
      </View>
    );
  }
}

export default home;
