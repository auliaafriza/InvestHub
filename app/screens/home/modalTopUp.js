import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Alert,
  View,
  Button,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import {TextInput} from '../../components/textInput';
import {mainColor, styles} from '../styles';
import {postTopUpAction} from '../../action/investAction/investAction';
import PropTypes from 'prop-types';
class modalTopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      value: '', //state of modal default false
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
  };

  handleTopUp = () => {
    let topUp = parseInt(this.state.value) + parseInt(this.props.postTopUp);
    AsyncStorage.setItem('topUp', JSON.stringify(topUp));
    this.handleAlert('Berhasil TopUp');
    this.setState({isVisible: false});
    this.props.dispatch(postTopUpAction(topUp));
    this.props.onPress;
  };

  onPress = () => {
    this.setState({isVisible: false});
  };

  handleAlert = message => {
    Alert.alert(
      'Success',
      message,
      [
        {
          text: 'Ok',
        },
      ],
      {cancelable: false}
    );
  };

  render() {
    return (
      <View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={this.props.onPress}
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
                value={`${this.state.value}`}
                onChangeText={text =>
                  this.setState({
                    value: text,
                  })
                }
                keyboardType="numeric"
              />
              <View style={styles.styleRowButton}>
                <View style={styles.paddingRight5}>
                  <Button
                    title="Close"
                    onPress={this.props.onPress}
                    color="red"
                  />
                </View>
                <View style={styles.paddingLeft5}>
                  <Button title="Top up" onPress={() => this.handleTopUp()} />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  postTopUp: state.investReducer.postTopUp,
});

export default connect(mapStateToProps)(modalTopUp);
