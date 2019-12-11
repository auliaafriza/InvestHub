import React, {Component} from 'react';
// import FormUMKM from './formUmkm';
import {connect} from 'react-redux';
import {
  getUmkmAllAction,
  resetUmkmAction,
} from '../../action/umkmAction/umkmAction';
import PropTypes from 'prop-types';
import {Card, CardList} from '../../components/card';
import {ScrollView} from 'react-native-gesture-handler';
import Loading from '../../components/loading/loading';
import {View, Button, Text} from 'react-native';
import {styles} from '../styles';
class umkm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nama: 'UMKM',
      PengaruhModal: 'Resiko Kecil',
      Skala: 'Mikro',
      alamat: 'Jalan Malabar nomor 24 Bogor Tengah, Jawa Barat',
      status: 'active',
      data: [],
      dataObj: {
        nama: '',
        alamat: '',
        long: '',
        lat: '',
        active: 1,
        status: 'UMKM',
      },
    };
  }
  static propTypes = {
    dispatch: PropTypes.func,
    // userAll: PropTypes.array,
  };
  componentDidMount() {
    this.props.dispatch(getUmkmAllAction());
  }

  componentDidUpdate() {
    if (this.props.umkmAllStatus) {
      this.setState({data: this.props.umkmAll.data});
      this.props.dispatch(resetUmkmAction());
    }
  }
  handleDetail = data => {
    data.status = 'UMKM';
    this.props.navigation.navigate('DetailUmkmPage', {
      data: data,
    });
  };

  handleAddUmkm = () => {
    const {dataObj} = this.state;
    this.props.navigation.navigate('DetailUmkmPage', {
      data: dataObj,
    });
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <Loading />
        <View style={[styles.containerForm, styles.padding20]}>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Daftar UMKM
          </Text>
          <Button title="Tambah Umkm" onPress={this.handleAddUmkm} />
          <ScrollView>
            <Card>
              {data.map((obj, i) => (
                <CardList
                  Nama={obj.nama}
                  onPress={() => this.handleDetail(obj)}
                  // PengaruhModal={PengaruhModal}
                  // Skala={Skala}
                  alamat={obj.address}
                  status={obj.active === '1' ? 'active' : 'deactive'}
                  type="umkm"
                  key={i}
                />
              ))}
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  umkmAll: state.umkmReducer.umkmAll,
  umkmAllStatus: state.umkmReducer.umkmAllStatus,
  loading: state.umkmReducer.loading,
});

export default connect(mapStateToProps)(umkm);