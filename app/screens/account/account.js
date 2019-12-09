import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {KeyboardAvoid} from '../../components/keyboardAvoid';
import {
  getUserByIdAction,
  resetUserAction,
  putUserAction,
} from '../../action/userAction/userAction';
import {connect} from 'react-redux';
import {View, Button, Picker, Alert} from 'react-native';
import {styles, black, color1} from '../styles';
import {TextInput, DropDown} from '../../components/textInput';
import {AsyncStorage} from 'react-native';
class account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      skalaUsaha: [
        {
          Id: '1',
          Nama: 'Mikro',
        },
        {
          Id: '2',
          Nama: 'Kecil',
        },
        {
          Id: '3',
          Nama: 'Menengah',
        },
      ],
      pengaruhModal: [
        {
          Id: '1',
          Nama: 'Resiko Rendah',
        },
        {
          Id: '2',
          Nama: 'Resiko Sedang',
        },
        {
          Id: '3',
          Nama: 'Resiko Tinggi',
        },
      ],
      routeName: '',
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
  };

  componentDidMount() {
    this.props.dispatch(getUserByIdAction(3));
    AsyncStorage.getItem('Role', (err, result) => {
      this.setState({routeName: result});
    });
  }
  componentDidUpdate() {
    if (this.props.userByIdStatus) {
      this.setState({data: {...this.props.userById.data[0]}});
      this.props.dispatch(resetUserAction());
    }
    if (this.props.putUserStatus) {
      this.props.dispatch(resetUserAction());
      this.handleAlert('Data Berhasil di Ubah');
    }
  }

  handleSave = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Data yang di isi sudah benar ?',
      [
        {
          text: 'Batal',
        },
        {
          text: 'Simpan',
          onPress: () => this.handleSaveUser(),
        },
      ],
      {cancelable: false}
    );
  };

  handleSaveUser = () => {
    const {data} = this.state;
    let mod = {
      Id: data.Id,
      nama: data.nama,
      email: data.email,
      address: data.address,
      gender: data.gender,
      card_number: data.cardNumber,
      card_type_id: data.cardTypeId,
      business_scale_id: data.businessScaleId,
      capital_influence_id: data.capitalInfluenceId,
    };
    this.props.dispatch(putUserAction(mod));
  };

  handleLogout = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda Yakin untuk Keluar ?',
      [
        {
          text: 'Batal',
        },
        {
          text: 'Keluar',
          onPress: () => this.props.navigation.navigate('Auth'),
        },
      ],
      {cancelable: false}
    );
  };

  handleAlert = message => {
    Alert.alert(
      'Information',
      message,
      [
        {
          text: 'Ok',
          onPress: () => this.props.navigation.navigate('Setting'),
        },
      ],
      {cancelable: false}
    );
  };

  render() {
    const {data, pengaruhModal, skalaUsaha, routeName} = this.state;
    return (
      <KeyboardAvoid>
        {() => (
          <View style={styles.container}>
            <View style={[styles.containerForm, styles.padding40]}>
              <TextInput
                label="Nama"
                placeholder="Nama"
                containerWidth="100%"
                containerHeight={45}
                value={data.nama}
                onChangeText={text =>
                  this.setState({
                    data: {...data, nama: text},
                  })
                }
                ColorborderBottom={black}
                required={true}
              />
              <TextInput
                label="Email"
                placeholder="Email"
                containerWidth="100%"
                containerHeight={45}
                value={data.email}
                onChangeText={text =>
                  this.setState({
                    data: {...data, email: text},
                  })
                }
                ColorborderBottom={black}
                required={true}
              />
              {routeName === 'Admin001' || (
                <>
                  <DropDown
                    label="Pengaruh Modal"
                    required={true}
                    datadropDown={pengaruhModal}
                    onValueChange={text =>
                      this.setState({
                        data: {...data, capitalInfluenceId: text},
                      })
                    }
                    value={data.capitalInfluenceId}
                  />
                  <DropDown
                    label="Skala Usaha"
                    required={true}
                    datadropDown={skalaUsaha}
                    onValueChange={text =>
                      this.setState({
                        data: {...data, businessScaleId: text},
                      })
                    }
                    value={data.businessScaleId}
                  />
                </>
              )}
              <Button title="Simpan" onPress={this.handleSave} color={color1} />
            </View>
            <View style={[styles.containerBottom, styles.padding40]}>
              <Button
                title={'Keluar'}
                onPress={this.handleLogout}
                color="#fb3838"
              />
            </View>
          </View>
        )}
      </KeyboardAvoid>
    );
  }
}

const mapStateToProps = state => ({
  userById: state.userReducer.userById,
  userByIdStatus: state.userReducer.userByIdStatus,
  putUserStatus: state.userReducer.putUserStatus,
});

export default connect(mapStateToProps)(account);
