import React, {Component} from 'react';
import FormAccount from './formDetailPengguna';
import PropTypes from 'prop-types';
import {KeyboardAvoid} from '../../../components/keyboardAvoid';
import {
  getUserByIdAction,
  resetUserAction,
  deleteUserAction,
  putUserAction,
  postUserAction,
} from '../../../action/userAction/userAction';
import {connect} from 'react-redux';
import {View, Button, Alert} from 'react-native';
import {styles, black, color1} from '../../styles';
import {TextInput, DropDown} from '../../../components/textInput';
import {ScrollView} from 'react-native-gesture-handler';

class detailpengguna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      contentButton: 'Edit',
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
      jenisKartu: [
        {
          Id: '1',
          Nama: 'KTP',
        },
      ],
      gender: [
        {
          Id: '1',
          Nama: 'Pria',
        },
        {
          Id: '2',
          Nama: 'Wanita',
        },
      ],
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
  };

  componentDidUpdate() {
    if (this.props.postUserStatus) {
      this.props.dispatch(resetUserAction());
      this.handleAlert('Data Berhasil di Tambah');
    }
    if (this.props.putUserStatus) {
      this.props.dispatch(resetUserAction());
      this.handleAlert('Data Berhasil di Ubah');
    }
    if (this.props.deleteUserStatus) {
      this.props.dispatch(resetUserAction());
      this.handleAlert('Data Berhasil di Hapus');
    }
  }
  handleSave = () => {
    const {contentButton} = this.state;
    // if (contentButton === 'Edit') {
    //   this.setState({contentButton: 'Save'});
    // } else {
    //   this.handleSaveUser();
    // }
    this.handleSaveUser();
  };

  handleDelete = () => {
    const {data} = this.state;
    Alert.alert(
      'Konfirmasi',
      'Apakah anda yakin menghapus user ? ',
      [
        {
          text: 'Batal',
        },
        {
          text: 'Yakin',
          onPress: () => this.props.dispatch(deleteUserAction(data)),
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
          onPress: () => this.props.navigation.navigate('Pengguna'),
        },
      ],
      {cancelable: false}
    );
  };
  handleSaveUser = () => {
    const {data} = this.state;
    let mod = {
      nama: data.nama,
      email: data.email,
      address: data.address,
      gender: data.gender,
      card_number: data.cardNumber,
      card_type_id: data.cardTypeId,
      business_scale_id: data.businessScaleId,
      capital_influence_id: data.capitalInfluenceId,
    };
    if (Number(data.Id > 0)) {
      mod.Id = data.Id;
      this.props.dispatch(putUserAction(mod));
      // console.log(mod);
    } else {
      this.props.dispatch(postUserAction([mod]));
      // console.log([mod]);
    }
  };

  render() {
    const {
      data,
      contentButton,
      skalaUsaha,
      pengaruhModal,
      jenisKartu,
      gender,
    } = this.state;
    return (
      <KeyboardAvoid>
        {() => (
          <ScrollView>
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
                <TextInput
                  label="Alamat"
                  placeholder="Alamat"
                  containerWidth="100%"
                  containerHeight={45}
                  value={data.address}
                  onChangeText={text =>
                    this.setState({
                      data: {...data, address: text},
                    })
                  }
                  ColorborderBottom={black}
                  required={true}
                />
                <DropDown
                  label="Jenis Kelamin"
                  required={true}
                  datadropDown={gender}
                  onValueChange={text =>
                    this.setState({
                      data: {...data, gender: text},
                    })
                  }
                  value={data.gender}
                />
                <DropDown
                  label="Jenis Kartu"
                  required={true}
                  datadropDown={jenisKartu}
                  onValueChange={text =>
                    this.setState({
                      data: {...data, cardTypeId: text},
                    })
                  }
                  value={data.cardTypeId}
                />
                <TextInput
                  label="Nomor Kartu"
                  placeholder="Nomor Kartu"
                  containerWidth="100%"
                  containerHeight={45}
                  value={data.cardNumber}
                  onChangeText={text =>
                    this.setState({
                      data: {...data, cardNumber: text},
                    })
                  }
                  ColorborderBottom={black}
                  required={true}
                />
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
                <Button
                  title={'Simpan'}
                  onPress={this.handleSave}
                  color={color1}
                />
              </View>
              {data.Id && (
                <View style={[styles.containerBottom, styles.padding40]}>
                  <Button
                    title="Delete Pengguna"
                    onPress={this.handleDelete}
                    color="#fb3838"
                  />
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </KeyboardAvoid>
    );
  }
}
const mapStateToProps = state => ({
  userById: state.userReducer.userById,
  userByIdStatus: state.userReducer.userByIdStatus,
  loading: state.userReducer.loading,
  postUserStatus: state.userReducer.postUserStatus,
  putUserStatus: state.userReducer.putUserStatus,
  deleteUserStatus: state.userReducer.deleteUserStatus,
});

export default connect(mapStateToProps)(detailpengguna);
