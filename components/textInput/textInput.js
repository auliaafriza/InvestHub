import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TextInput, Animated, Keyboard, Text } from "react-native";
import TextWarning from "./textWarning";
import styles from "./styles";

class textInput extends Component {
  constructor(props) {
    super(props);
    this.animatedIsFocused = new Animated.Value(this.props.value ? 1 : 0);
    this.state = {
      isFocused: false,
      animatedIsFocused: new Animated.Value(this.props.value ? 1 : 0)
    };
  }

  static propTypes = {
    value: PropTypes.string
  };

  componentDidUpdate() {
    Animated.timing(this.state.animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value ? 1 : 0,
      duration: 200
    }).start();
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      textColor,
      label,
      error,
      disable,
      containerWidth,
      containerPadding,
      placeholder,
      containerHeight,
      disableInput,
      marginBottom,
      required = false,
      multiline,
      border = true,
      ...props
    } = this.props;
    const labelStyle = [
      {
        position: "absolute",
        left: 5,
        top: this.state.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [30, 12]
        }),
        fontSize: this.state.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 14]
        }),
        color: this.state.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: ["white", "white"]
        }),
        marginBottom: 10
      }
    ];
    const textStyle = [styles.text];
    const marginStyles = [styles.marginBottomView];

    const textInputStyles = [
      border ? styles.textInputStyle : styles.textInputNoBorder
    ];
    if (containerWidth) {
      textInputStyles.push({ width: containerWidth });
    }
    if (disableInput == "disable") {
      textInputStyles.push({ backgroundColor: styles.$disabelColor });
    }
    if (containerHeight) {
      textInputStyles.push({ height: containerHeight });
    }
    if (containerPadding) {
      textInputStyles.push({ paddingTop: containerPadding });
    }
    if (marginBottom) {
      marginStyles.push({ marginBottom: marginBottom });
    }
    if (textColor) {
      textStyle.push({ color: textColor });
      textStyle.push({ borderBottomColor: styles.$blacklight2color });
      labelStyle.push({
        color: this.animatedIsFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [styles.$blacklight2color, styles.$blacklight2color]
        })
      });
    }

    if (this.state.isFocused) {
      textStyle.push({ borderBottomColor: "#e6ca6b" });
    }

    return (
      <View styles={styles.styles}>
        <View style={styles.row100}>
          <View style={styles.width50}>
            <View style={styles.row100}>
              <Text
                style={[
                  styles.colorBlackLight,
                  styles.textSemiBold,
                  styles.marginBottom10
                ]}
              >
                {label}
              </Text>
              {required ? (
                <Text
                  style={[
                    styles.textSemiBold,
                    styles.marginBottom10,
                    styles.colorRed
                  ]}
                >
                  *
                </Text>
              ) : null}
            </View>
          </View>
          <View style={styles.width50}>
            <TextWarning show={true} textwarning={error} />
          </View>
        </View>

        <View style={marginStyles}>
          <TextInput
            {...props}
            onFocus={disable ? Keyboard.dismiss() : this.handleFocus}
            onBlur={this.handleBlur}
            blurOnSubmit
            underlineColorAndroid="transparent"
            editable={disable}
            selectTextOnFocus={disable}
            placeholder={placeholder}
            style={textInputStyles}
            multiline={multiline}
          />
        </View>
      </View>
    );
  }
}

textInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  disable: PropTypes.bool,
  textColor: PropTypes.string,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.number,
  error: PropTypes.string,
  containerPadding: PropTypes.number,
  placeholder: PropTypes.string,
  disableInput: PropTypes.string,
  marginBottom: PropTypes.number,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  border: PropTypes.bool
};

export default textInput;
