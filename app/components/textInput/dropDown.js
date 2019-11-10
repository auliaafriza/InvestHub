import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Picker} from 'react-native';
import styles from './styles';
import TextWarning from './textWarning';

class dropDown extends Component {
  render() {
    const {
      error,
      required,
      label,
      sizetext,
      paddingleft,
      alignSelfText,
      datadropDown,
      onValueChange,
      value,
    } = this.props;
    const containerWarning = [styles.containerWarning];
    const textwarningstyles = [styles.warningtext];

    if (paddingleft) {
      containerWarning.push({paddingLeft: paddingleft});
    }
    if (sizetext) {
      textwarningstyles.push({fontSize: sizetext});
    }
    if (alignSelfText) {
      containerWarning.push({alignSelf: alignSelfText});
    }

    return (
      <View>
        <View style={styles.row100}>
          <View style={styles.width50}>
            <View style={styles.row100}>
              <Text
                style={[
                  styles.colorBlackLight,
                  styles.textSemiBold,
                  styles.marginBottom10,
                ]}
              >
                {label}
              </Text>
              {required ? (
                <Text
                  style={[
                    styles.textSemiBold,
                    styles.marginBottom10,
                    styles.colorRed,
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

        <View style={[styles.row100, styles.containerDropDown]}>
          <Picker
            selectedValue={value}
            textStyle={styles.textPicker}
            style={styles.containerDropDownAndroid}
            onValueChange={onValueChange}
          >
            <Picker.Item label={label} value="" color="rgb(211,211,211)" />
            {datadropDown.map((data, i) => {
              return <Picker.Item label={data.Nama} value={data.Id} key={i} />;
            })}
          </Picker>
        </View>
      </View>
    );
  }
}

dropDown.propTypes = {
  required: PropTypes.bool,
  sizetext: PropTypes.number,
  paddingleft: PropTypes.string,
  alignSelfText: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  datadropDown: PropTypes.array,
  onValueChange: PropTypes.func,
  value: PropTypes.string,
};

export default dropDown;
