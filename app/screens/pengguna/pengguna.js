import React, {Component} from 'react';
import {
  getUserAllAction,
  resetUserAction,
} from '../../action/userAction/userAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {styles} from '../styles';
import {Card, CardList} from '../../components/card';
import {ScrollView} from 'react-native-gesture-handler';
class pengguna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nama: 'UMKM',
      PengaruhModal: 'Resiko Kecil',
      Skala: 'Mikro',
      alamat: 'Jalan Malabar nomor 24 Bogor Tengah, Jawa Barat',
      status: 'active',
      Balance: 'Rp 100.000.000,-',
      data: [],
      dataObj: {
        nama: '',
        email: '',
        address: '',
        gender: '1',
        cardNumber: '',
        cardTypeId: '1',
        businessScaleId: '1',
        capitalInfluenceId: '1',
        // card_type_id: '1',
        // business_scale_id: '1',
        // capital_influence_id: '1',
      },
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    userAll: PropTypes.array,
  };

  componentDidMount() {
    this.props.dispatch(getUserAllAction());
  }
  componentDidUpdate() {
    if (this.props.userAllStatus) {
      this.setState({data: this.props.userAll.data});
      this.props.dispatch(resetUserAction());
    }
  }

  handleDetail = data => {
    this.props.navigation.navigate('DetailPengguna', {
      data: data,
    });
  };

  handleAddUser = () => {
    const {dataObj} = this.state;
    this.props.navigation.navigate('DetailPengguna', {
      data: dataObj,
    });
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.containerForm, styles.padding20]}>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Daftar Pengguna
          </Text>
          <Button title="Tambah Pengguna" onPress={this.handleAddUser} />
          <ScrollView>
            <Card>
              {data.map(obj => (
                <CardList
                  Nama={obj.nama}
                  onPress={() => this.handleDetail(obj)}
                  PengaruhModal={obj.capitalInfluenceName}
                  Skala={obj.bussinessScaleName}
                  alamat={obj.address}
                  // status="active"
                  Balance="0"
                  type="pengguna"
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
  userAll: state.userReducer.userAll,
  userAllStatus: state.userReducer.userAllStatus,
});

export default connect(mapStateToProps)(pengguna);
