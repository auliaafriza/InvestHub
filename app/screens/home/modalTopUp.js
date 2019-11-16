import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal} from 'react-native';
import {TextInput} from '../../components/textInput';
import {mainColor, styles} from '../styles';

export default class App extends Component {
  state = {
    isVisible: false, //state of modal default false
  };
  render() {
    const {modalVisible, onPress} = this.props;
    return (
      <View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          <View style={styles.modal}>
            <View style={styles.center}>
              <TextInput
                label="Nominal"
                placeholder="Nominal"
                required={true}
                border={true}
                containerWidth="80%"
                containerHeight={35}
                //   value={valuePass}
                //   onChangeText={onChangeTextPass}
                //   secureTextEntry={true}
              />
              <Button title="Top up" color="red" />
            </View>

            <Button title="Click To Close Modal" onPress={onPress} />
            {/* <Text style={styles.text}>Modal is open!</Text>
             */}
          </View>
        </Modal>
      </View>
    );
  }
}
