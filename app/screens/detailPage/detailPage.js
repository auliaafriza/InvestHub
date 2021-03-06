import React, {Component} from 'react';
import FormDetailPage from './formDetailPage';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';
import {KeyboardAvoid} from '../../components/keyboardAvoid';

class detailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DetailPage: {
        Name: 'Berkah Bersama Aul',
        Alamat: 'Malabar Kosan Paket',
      },
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
  };

  handleInvest = () => {
    const {DetailPage} = this.state;
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ok',
        },
        {
          text: DetailPage.Alamat,
        },
      ],
      {cancelable: false}
    );
  };

  render() {
    return (
      <KeyboardAvoid>
        {() => (
          <FormDetailPage
            data={this.state.DetailPage}
            handleInvest={this.handleInvest}
          />
        )}
      </KeyboardAvoid>
    );
  }
}

export default detailPage;
