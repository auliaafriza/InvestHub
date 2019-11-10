import React from 'react';
import {View, Image, Button} from 'react-native';
import {styles, color1} from '../styles';
import {TextInput} from '../../components/textInput';
// import { Button } from "../../components/button";
import PropTypes from 'prop-types';

const formLogin = ({
  valueUsername,
  valuePass,
  onChangeTextPass,
  onChangeTextUsername,
  onPressSubmit,
}) => {
  return (
    <View style={[styles.container, styles.center]}>
      <View style={styles.paddingLogin}>
        <View style={styles.center}>
          <Image
            style={{width: 160, height: 160}}
            source={require('../../../assets/images/Ivesthub.png')}
            resizeMode="contain"
          />
        </View>
        <TextInput
          label="Username"
          placeholder="username"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={35}
          value={valueUsername}
          onChangeText={onChangeTextUsername}
          marginBottom={0}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          required={false}
          border={true}
          containerWidth="100%"
          containerHeight={35}
          value={valuePass}
          onChangeText={onChangeTextPass}
          secureTextEntry={true}
        />
        <Button title="Sign In" onPress={onPressSubmit} color={color1} />
      </View>
    </View>
  );
};

formLogin.propTypes = {
  valueUsername: PropTypes.string,
  valuePass: PropTypes.string,
  onChangeTextPass: PropTypes.func,
  onChangeTextUsername: PropTypes.func,
  onPressSubmit: PropTypes.func,
};

export default formLogin;
