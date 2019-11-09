import React, { Component } from "react";
import FormLogin from "./formLogin";
import { Alert } from "react-native";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Login: {
        Username: "",
        Password: ""
      },
      messageAlert: "",
      isAlert: false
    };
  }

  handleValidate = () => {
    const { Login } = this.state;
    let isError = false;
    if (Login.Username === "" && Login.Password === "") {
      this.setState({
        messageAlert: "Username dan Password tidak boleh kosong",
        isAlert: true
      });
      isError = true;
    } else if (Login.Username === "") {
      this.setState({
        messageAlert: "Username tidak boleh kosong",
        isAlert: true
      });
      isError = true;
    } else if (Login.Password === "") {
      this.setState({
        messageAlert: "Password tidak boleh kosong",
        isAlert: true
      });
      isError = true;
    }
    return isError;
  };
  handleLogin = () => {
    let isError = this.handleValidate;
    if (!isError) {
      this.handleAlert();
    } else {
      this.props.navigation.navigate("App");
    }
    // this.props.navigation.navigate("App");
  };
  handleAlert = () => {
    const { isAlert, messageAlert } = this.state;
    if (isAlert) {
      Alert.alert(
        "Gagal Masuk",
        messageAlert,
        [
          {
            text: "OK"
          }
        ],
        { cancelable: false }
      );
    }
  };

  render() {
    return (
      <FormLogin
        valueUsername={this.state.Username}
        valuePass={this.state.Password}
        onChangeTextPass={text =>
          this.setState({
            Login: { ...this.state.Login, Password: text }
          })
        }
        onChangeTextUsername={text =>
          this.setState({
            Login: { ...this.state.Login, Username: text }
          })
        }
        onPressSubmit={() => this.handleLogin()}
      />
    );
  }
}

export default login;
