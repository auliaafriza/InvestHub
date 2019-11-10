import React from "react";
import { View, Image } from "react-native";
import { styles, orange } from "../styles";
import { TextInput } from "../../components/textInput";
import { Button } from "../../components/button";
import PropTypes from "prop-types";

const formLogin = ({
  handleDealsIcon,
  handleHomeIcon,
  handleNotificationIcon,
  handleSetting
}) => {
  return (
    <View>
      <View>
        <Button
          text="Home"
          buttonWidth="10%"
          buttonHeight={20}
          buttonColor={orange}
          textColor="white"
          onPress={handleHomeIcon}
        />
        <Button
          text="Deals"
          buttonWidth="10%"
          buttonHeight={20}
          buttonColor={orange}
          textColor="white"
          onPress={handleDealsIcon}
        />
        <Button
          text="Notification"
          buttonWidth="10%"
          buttonHeight={20}
          buttonColor={orange}
          textColor="white"
          onPress={handleNotificationIcon}
        />
        <Button
          text="Setting"
          buttonWidth="10%"
          buttonHeight={20}
          buttonColor={orange}
          textColor="white"
          onPress={handleSetting}
        />
      </View>
    </View>
  );
};

formLogin.propTypes = {
  valueUsername: PropTypes.string,
  valuePass: PropTypes.string,
  onChangeTextPass: PropTypes.func,
  onChangeTextUsername: PropTypes.func,
  onPressSubmit: PropTypes.func
};

export default formLogin;
