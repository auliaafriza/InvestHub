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
    };
  }

  render() {
    return (
      <FormUMKM
        Nama={this.state.Nama}
        // onPress={onPress}
        PengaruhModal={this.state.PengaruhModal}
        Skala={this.state.Skala}
        alamat={this.state.alamat}
        status={this.state.status}
      />
    );
  }
}

export default umkm;
