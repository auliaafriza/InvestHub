import React, {Component} from 'react';
import FormUMKM from './formUmkm';

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
    };
  }

  componentDidMount() {
    fetch('http://investhub.neotenstudio.com:80/InvestHubAPI/API/GetUmkmList/')
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
      <FormUMKM
        Nama={this.state.Nama}
        // onPress={onPress}
        PengaruhModal={this.state.PengaruhModal}
        Skala={this.state.Skala}
        alamat={this.state.alamat}
        status={this.state.status}
        dataList={data}
      />
    );
  }
}

export default umkm;
