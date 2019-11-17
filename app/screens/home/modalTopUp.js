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
          onRequestClose={onPress}
        >
          <View style={styles.modal}>
            <View
              style={[styles.containerForm, styles.center, styles.paddingLogin]}
            >
              <TextInput
                label="Nominal"
                placeholder="Nominal"
                required={true}
                border={true}
                containerWidth="80%"
                containerHeight={35}
                //   value={valuePass}
                //   onChangeText={onChangeTextPass}
              />
              <View style={styles.styleRowButton}>
                <View style={styles.paddingRight5}>
                  <Button title="Close" onPress={onPress} color="red" />
                </View>
                <View style={styles.paddingLeft5}>
                  <Button title="Top up" />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
