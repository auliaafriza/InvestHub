import React, {Component} from 'react';
import FormPengguna from './formPengguna';

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
    };
  }

  render() {
    return (
      <FormPengguna
        Nama={this.state.Nama}
        // onPress={onPress}
        PengaruhModal={this.state.PengaruhModal}
        Skala={this.state.Skala}
        alamat={this.state.alamat}
        status={this.state.status}
        Balance={this.state.Balance}
      />
    );
  }
}

export default pengguna;
