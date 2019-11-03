import React, { Component } from "react";
import FormLogin from "./formLogin";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Login: {
        Username: "",
        Password: ""
      }
    };
  }

  handleLogin = () => {
    this.props.navigation.navigate("App");
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
