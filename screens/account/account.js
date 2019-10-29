import React, { Component } from "react";
import FormAccount from "./formAccount";
import PropTypes from "prop-types";
import { Alert } from "react-native";

class login extends Component {
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
    // Alert.alert("New version available", "Please, update app to new version", [
    //   {
    //     text: "Oke"
    //   }
    // ]);
    // this.props.navigation.navigate("Home");
    const { Account } = this.state;
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: Account.Name
        },
        {
          text: Account.Email
        },
        {
          text: Account.PengaruhModal
        },
        {
          text: Account.KarakteristikUsaha
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
        // valueUsername={this.state.Username}
        // valuePass={this.state.Password}
        // onChangeTextPass={text =>
        //   this.setState({
        //     Login: { ...this.state.Login, Password: text }
        //   })
        // }
        // onChangeTextUsername={text =>
        //   this.setState({
        //     Login: { ...this.state.Login, Username: text }
        //   })
        // }
        // onPressSubmit={this.handleLogin}
      />
    );
  }
}

export default login;
