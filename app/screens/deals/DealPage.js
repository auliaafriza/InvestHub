// import React, {Component} from 'react';
// import FormDeals from './formDeals';
// import PropTypes from 'prop-types';
// import {Alert} from 'react-native';

// class DealPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   static propTypes = {};
//   handleDetail = () => {
//     this.props.navigation.navigate('UMKMPage');
//   };

//   render() {
//     return <FormDeals handleDetail={this.handleDetail} />;
//   }
// }

// export default DealPage;

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
import {View, Button, Text, AsyncStorage} from 'react-native';
import {styles} from '../styles';
class umkm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataObj: {
        nama: '',
        alamat: '',
        long: '',
        lat: '',
        active: 1,
        nominal: 0,
      },
    };
  }
  static propTypes = {
    dispatch: PropTypes.func,
    // userAll: PropTypes.array,
  };

  async componentDidMount() {
    const data = JSON.parse(await AsyncStorage.getItem('dataInvest'));
    this.props.dispatch(getUmkmAllAction(data));
  }

  componentDidUpdate() {
    if (this.props.umkmAllStatus) {
      this.setState({data: this.props.umkmAll});
      this.props.dispatch(resetUmkmAction());
    }
  }

  handleDetail = data => {
    this.props.navigation.navigate('DetailUmkmPage', {
      data: data,
      type: 'deal',
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
            Daftar Investasi
          </Text>
          <ScrollView>
            <Card>
              {data.length != 0
                ? data.map(
                    (obj, i) =>
                      obj.active === '1' && (
                        <CardList
                          Nama={obj.nama}
                          onPress={() => this.handleDetail(obj)}
                          PengaruhModal={
                            obj.PengaruhModal ? obj.PengaruhModal : ''
                          }
                          Skala={
                            obj.KarakteristikUsaha ? obj.KarakteristikUsaha : ''
                          }
                          alamat={obj.alamat}
                          status={obj.active === '1' ? 'active' : 'deactive'}
                          type="umkm"
                          key={i}
                        />
                      )
                  )
                : null}
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
