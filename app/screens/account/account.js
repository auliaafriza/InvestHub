import React, { Component } from "react";
import FormAccount from "./formAccount";
import PropTypes from "prop-types";
import { Alert } from "react-native";

class account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Account: {
        Name: "",
        Email: "",
        PengaruhModal: "",
        KarakteristikUsaha: ""
      }
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object
  };

  handleSave = () => {
    const { Account } = this.state;
    Alert.alert(
      "Konfirmasi",
      "Apakah Data yang di isi sudah benar ?",
      [
        // {
        //   text: Account.Name
        // },
        // {
        //   text: Account.Email
        // },
        // {
        //   text: Account.PengaruhModal
        // },
        // {
        //   text: Account.KarakteristikUsaha
        // }
        {
          text: "Batal"
        },
        {
          text: "Simpan",
          onPress: () => console.log("Simpan")
        }
      ],
      { cancelable: false }
    );
  };

  handleLogout = () => {
    Alert.alert(
      "Konfirmasi",
      "Apakah Anda Yakin untuk Keluar ?",
      [
        {
          text: "Batal"
        },
        {
          text: "Keluar",
          onPress: () => this.props.navigation.navigate("Auth")
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <FormAccount
        data={this.state.Account}
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        onChangeTextName={text =>
          this.setState({
            Account: { ...this.state.Account, Name: text }
          })
        }
        onChangeTextEmail={text =>
          this.setState({
            Account: { ...this.state.Account, Email: text }
          })
        }
        onChangeTextPengaruhModal={text =>
          this.setState({
            Account: { ...this.state.Account, PengaruhModal: text }
          })
        }
        onChangeTextKarateristikUsaha={text =>
          this.setState({
            Account: { ...this.state.Account, KarakteristikUsaha: text }
          })
        }
        handleLogout={this.handleLogout}
      />
    );
  }
}

export default account;
