import React, {Component} from 'react';
import FormInvestasi from './formInvestasi';

class investasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nama: 'UMKM',
      Pengguna: 'Resiko Kecil',
      umkm: 'Mikro',
      Amount: 'Rp 100.000.000,-',
    };
  }

  render() {
    return (
      <FormInvestasi
        Nama={this.state.Nama}
        // onPress={onPress}
        Pengguna={this.state.Pengguna}
        umkm={this.state.umkm}
        Amount={this.state.Amount}
      />
    );
  }
}

export default investasi;
