import React, {Component} from 'react';
import FormPengguna from './formPengguna';
import {getUserAllAction} from '../../action/userAction/userAction';
// import {connect} from 'react-redux';
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

  // componentDidMount() {
  //   this.props
  //     .getUserAllAction()
  //     .then(res => this.setState({data: res.value.data}));
  // }
  componentDidMount() {
    fetch('http://investhub.neotenstudio.com:80/InvestHubAPI/API/GetUserList/')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          data: responseJson.data,
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  render() {
    const {data} = this.state;
    return (
      <FormPengguna
        // Nama={this.state.Nama}
        // // onPress={onPress}
        // PengaruhModal={this.state.PengaruhModal}
        // Skala={this.state.Skala}
        // alamat={this.state.alamat}
        // status={this.state.status}
        // Balance={this.state.Balance}
        dataList={data}
      />
    );
  }
}

export default pengguna;
// function mapStateToProps(state) {
//   return {};
// }
// export default connect(
//   mapStateToProps,
//   {
//     getUserAllAction,
//   }
// )(pengguna);
