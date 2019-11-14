import React, {Component} from 'react';
import FormSignUp from './formSignUp';

class singUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SignUp: {
        NamaUsaha: '',
        Alamat: '',
        JenisUsaha: '',
        NPWP: '',
        SIUP: '',
        Email: '',
        PhoneNumber: '',
      },
    };
  }

  handleSignUp = () => {
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <FormSignUp
        valueNamaUsaha={this.state.SignUp.NamaUsaha}
        valueAlamat={this.state.SignUp.Alamat}
        valueJenisUsaha={this.state.SignUp.JenisUsaha}
        valueNPWP={this.state.SignUp.NPWP}
        valueSIUP={this.state.SignUp.SIUP}
        valueEmail={this.state.SignUp.Email}
        valuePhoneNumber={this.state.SignUp.PhoneNumber}
        onChangeTextNamaUsaha={text =>
          this.setState({
            SignUp: {...this.state.SignUp, NamaUsaha: text},
          })
        }
        onChangeTextAlamat={text =>
          this.setState({
            SignUp: {...this.state.SignUp, Alamat: text},
          })
        }
        onChangeTextJenisUsaha={text =>
          this.setState({
            SignUp: {...this.state.SignUp, JenisUsaha: text},
          })
        }
        onChangeTextNPWP={text =>
          this.setState({
            SignUp: {...this.state.SignUp, NPWP: text},
          })
        }
        onChangeTextSIUP={text =>
          this.setState({
            SignUp: {...this.state.SignUp, SIUP: text},
          })
        }
        onChangeTextEmail={text =>
          this.setState({
            SignUp: {...this.state.SignUp, Email: text},
          })
        }
        onChangeTextPhoneNumber={text =>
          this.setState({
            SignUp: {...this.state.SignUp, PhoneNumber: text},
          })
        }
        onPressSubmit={() => this.handleSignUp()}
      />
    );
  }
}

export default singUp;
