import React, {Component} from 'react';
// import FormDetailUmkm from './formDetailUmkm';
import PropTypes from 'prop-types';
import {KeyboardAvoid} from '../../../components/keyboardAvoid';
import {connect} from 'react-redux';
import {
  resetUmkmAction,
  postUmkmAction,
  deleteUmkmAction,
  putUmkmAction,
} from '../../../action/umkmAction/umkmAction';
import {View, Button, Alert} from 'react-native';
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
          Id: 'rumahan',
          Nama: 'UMKM skala rumahan',
        },
        {
          Id: 'tempatusaha',
          Nama: 'UMKM skala bertempat usaha',
        },
        {
          Id: 'produksi',
          Nama: 'UMKM skala produksi',
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
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
  };

  componentDidUpdate() {
    if (this.props.postUmkmStatus) {
      this.props.dispatch(resetUmkmAction());
      this.handleAlert('Data Berhasil di Tambah');
    }
    if (this.props.putUmkmStatus) {
      this.props.dispatch(resetUmkmAction());
      this.handleAlert('Data Berhasil di Ubah');
    }
    if (this.props.deleteUmkmStatus) {
      this.props.dispatch(resetUmkmAction());
      this.handleAlert('Data Berhasil di Hapus');
    }
  }
  handleSave = () => {
    const {contentButton} = this.state;
    // if (contentButton === 'Edit') {
    //   this.setState({contentButton: 'Save'});
    // } else {
    //   this.handleSaveUmkm();
    // }
    this.handleSaveUmkm();
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
          onPress: () => this.props.dispatch(deleteUmkmAction(data)),
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
          onPress: () => this.props.navigation.navigate('UMKM'),
        },
      ],
      {cancelable: false}
    );
  };
  handleSaveUmkm = () => {
    const {data} = this.state;
    let mod = {
      Id: data.Id,
      nama: data.nama,
      alamat: data.address,
      long: data.longitude,
      lat: data.latitude,
      active: data.active,
    };
    if (Number(data.Id > 0)) {
      this.props.dispatch(putUmkmAction(mod));
    } else {
      this.props.dispatch(postUmkmAction([mod]));
    }
  };

  render() {
    let {data, contentButton, karateristikUsaha, pengaruhModal} = this.state;
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
                disable={true}
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
                disable={true}
              />
              <DropDown
                label="Pengaruh Modal"
                required={true}
                datadropDown={pengaruhModal}
                // onValueChange={onChangeTextPengaruhModal}
                value={data.PengaruhModal}
              />
              <DropDown
                label="Karakteristik Usaha"
                required={true}
                datadropDown={karateristikUsaha}
                // onValueChange={onChangeTextKarateristikUsaha}
                value={data.KarakteristikUsaha}
              />
              {data.status === 'UMKM' ? (
                <Button
                  title={'Simpan'}
                  onPress={this.handleSave}
                  color={color1}
                />
              ) : (
                <Button
                  title={'Invest'}
                  // onPress={this.handleSave}
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
});

export default connect(mapStateToProps)(detailUmkm);
