import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const button = ({
  onPress,
  text,
  buttonWidth,
  buttonHeight,
  buttonColor,
  textColor,
  textSize,
  colorBorder,
  borderBottom,
  colorBorderBottom,
  radiusBorder,
  shadow = false,
  disabled = false
}) => {
  const containerStyles = [shadow ? styles.containerShadow : styles.container];
  if (buttonWidth) {
    containerStyles.push({ width: buttonWidth });
  }
  if (buttonHeight) {
    containerStyles.push({ height: buttonHeight });
  }
  if (buttonColor) {
    containerStyles.push({ backgroundColor: buttonColor });
  }
  if (colorBorder) {
    containerStyles.push({ borderColor: colorBorder });
  }
  if (borderBottom) {
    containerStyles.push({ borderBottomWidth: borderBottom });
  }
  if (colorBorderBottom) {
    containerStyles.push({ borderBottomColor: colorBorderBottom });
  }
  if (radiusBorder) {
    containerStyles.push({ borderRadius: radiusBorder });
  }

  const textStyles = [styles.text];
  if (textColor) {
    textStyles.push({ color: textColor });
  }
  if (textSize) {
    textStyles.push({ fontSize: textSize });
  }
  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  buttonWidth: PropTypes.string,
  buttonHeight: PropTypes.number,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  bold: PropTypes.bool,
  textSize: PropTypes.number,
  colorBorder: PropTypes.string,
  borderBottom: PropTypes.number,
  colorBorderBottom: PropTypes.string,
  radiusBorder: PropTypes.number,
  shadow: PropTypes.bool,
  disabled: PropTypes.bool
};

export default button;
