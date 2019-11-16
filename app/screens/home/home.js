import React, {Component} from 'react';
import FormHome from './formHome';
// import NavigationIcon from "../navigationIcon/Navigation";
import {View} from 'react-native';
import ModalExample from './modalTopUp';
import {styles} from '../styles';
class home extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
      </View>
    );
  }
}

export default home;
