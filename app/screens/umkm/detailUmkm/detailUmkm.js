import React, {Component} from 'react';
// import FormDetailUmkm from './formDetailUmkm';
import PropTypes from 'prop-types';
import {KeyboardAvoid} from '../../../components/keyboardAvoid';
import {connect} from 'react-redux';
import {getUmkmAllAction} from '../../../action/umkmAction/umkmAction';

import {View, Button, Alert, AsyncStorage} from 'react-native';
import {styles, black, color1} from '../../styles';
import {TextInput, DropDown} from '../../../components/textInput';

class detailUmkm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      contentButton: 'Edit',
      karateristikUsaha: [
        {
          Id: 'mikro',
          Nama: 'Mikro',
        },
        {
          Id: 'kecil',
          Nama: 'Kecil',
        },
        {
          Id: 'menengah',
          Nama: 'Menengah',
        },
      ],
      pengaruhModal: [
        {
          Id: 'rendah',
          Nama: 'Resiko Rendah',
        },
        {
          Id: 'sedang',
          Nama: 'Resiko Sedang',
        },
        {
          Id: 'tinggi',
          Nama: 'Resiko Tinggi',
        },
      ],
      activeStatus: [
        {
          Id: '1',
          Nama: 'active',
        },
        {
          Id: '2',
          Nama: 'deactive',
        },
      ],
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
    umkmAll: PropTypes.array,
  };

  handleSave = () => {
    const {data} = this.state;
    let mod = {
      Id: data.Id,
      nama: data.nama,
      alamat: data.alamat,
      long: data.longitude,
      lat: data.latitude,
      active: data.active,
      PengaruhModal: data.PengaruhModal,
      KarakteristikUsaha: data.KarakteristikUsaha,
    };
    data.status === 'UMKM' ? this.handleAddData(mod) : this.handleEditData(mod);
  };

  handleAddData = mod => {
    let dataSplice = [...this.props.umkmAll];
    mod.Id = dataSplice.length + 1;
    dataSplice.push(mod);
    AsyncStorage.setItem('dataInvest', JSON.stringify(dataSplice));
    this.handleAlert('Data Berhasil di Tambah');
    this.props.dispatch(getUmkmAllAction(dataSplice));
  };

  handleEditData = mod => {
    let dataSplice = [...this.props.umkmAll];
    let indexFind = dataSplice.findIndex(item => item.Id === mod.Id);
    indexFind !== -1 ? dataSplice.splice(indexFind, 1, mod) : dataSplice;
    AsyncStorage.setItem('dataInvest', JSON.stringify(dataSplice));
    this.handleAlert('Data Berhasil di Invest');
    this.props.dispatch(getUmkmAllAction(dataSplice));
  };

  handleDelete = () => {
    const {data} = this.state;
    Alert.alert(
      'Konfirmasi',
      'Apakah anda yakin menghapus umkm ? ',
      [
        {
          text: 'Batal',
        },
        {
          text: 'Yakin',
          onPress: () => this.handleDeleteData(data.Id),
        },
      ],
      {cancelable: false}
    );
  };

  handleDeleteData = Id => {
    let dataSplice = [...this.props.umkmAll];
    let indexFind = dataSplice.findIndex(item => item.Id === Id);
    indexFind !== -1 ? dataSplice.splice(indexFind, 1) : dataSplice;
    AsyncStorage.setItem('dataInvest', JSON.stringify(dataSplice));
    this.handleAlert('Data Berhasil di Hapus');
    this.props.dispatch(getUmkmAllAction(dataSplice));
  };

  handleAlert = message => {
    Alert.alert(
      'Information',
      message,
      [
        {
          text: 'Ok',
          onPress: () =>
            this.props.navigation.state.params.type === 'deal'
              ? this.props.navigation.navigate('Deal')
              : this.props.navigation.navigate('UMKM'),
        },
      ],
      {cancelable: false}
    );
  };

  render() {
    let {
      data,
      contentButton,
      karateristikUsaha,
      pengaruhModal,
      activeStatus,
    } = this.state;
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
                label="Alamat"
                placeholder="Alamat"
                containerWidth="100%"
                containerHeight={45}
                value={data.alamat}
                onChangeText={text =>
                  this.setState({
                    data: {...data, alamat: text},
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
                    data: {...data, PengaruhModal: text},
                  })
                }
                value={data.PengaruhModal}
              />
              <DropDown
                label="Karakteristik Usaha"
                required={true}
                datadropDown={karateristikUsaha}
                onValueChange={text =>
                  this.setState({
                    data: {...data, KarakteristikUsaha: text},
                  })
                }
                value={data.KarakteristikUsaha}
              />
              {this.props.navigation.state.params.type === 'add' ? (
                <DropDown
                  label="Status"
                  required={true}
                  datadropDown={activeStatus}
                  onValueChange={text =>
                    this.setState({
                      data: {...data, active: text},
                    })
                  }
                  value={data.active}
                />
              ) : null}
              {data.status === 'UMKM' ? (
                <Button
                  title={'Simpan'}
                  onPress={this.handleSave}
                  color={color1}
                />
              ) : (
                <Button
                  title={'Invest'}
                  onPress={this.handleSave}
                  color={color1}
                />
              )}
            </View>
            {data.Id && data.status === 'UMKM' && (
              <View style={[styles.containerBottom, styles.padding40]}>
                <Button
                  title="Delete UMKM"
                  onPress={this.handleDelete}
                  color="#fb3838"
                />
              </View>
            )}
          </View>
        )}
      </KeyboardAvoid>
    );
  }
}
const mapStateToProps = state => ({
  umkmById: state.umkmReducer.umkmById,
  umkmByIdStatus: state.umkmReducer.umkmByIdStatus,
  loading: state.umkmReducer.loading,
  postUmkmStatus: state.umkmReducer.postUmkmStatus,
  putUmkmStatus: state.umkmReducer.putUmkmStatus,
  deleteUmkmStatus: state.umkmReducer.deleteUmkmStatus,
  umkmAll: state.umkmReducer.umkmAll,
});

export default connect(mapStateToProps)(detailUmkm);
