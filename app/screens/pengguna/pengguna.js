import React, {Component} from 'react';
import FormPengguna from './formPengguna';
import {getUserAllAction} from '../../action/userAction/userAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    userAll: PropTypes.array,
  };

  componentDidMount() {
    this.props.dispatch(getUserAllAction());
  }
  // componentDidMount() {
  //   fetch('http://investhub.neotenstudio.com:80/InvestHubAPI/API/GetUserList/')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         loading: false,
  //         data: responseJson.data,
  //       });
  //     })
  //     .catch(error => console.log(error)); //to catch the errors if any
  // }

  render() {
    const {data} = this.state;
    return <FormPengguna dataList={data} />;
  }
}

const mapStateToProps = state => ({
  userAll: state.userReducer.userAll,
});

export default connect(mapStateToProps)(pengguna);
