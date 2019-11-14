import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const card = ({
  children,
  color,
  onPress,
  widthCard,
  topMargin,
  bottomMargin,
  heightCard,
  alignself,
  border,
  overflow = false,
}) => {
  // const containerStyles = [styles.containerCardView];
  const containerStyles = [styles.containerCardView];
  if (alignself) {
    containerStyles.push({alignSelf: alignself});
  }
  if (color) {
    containerStyles.push({backgroundColor: color});
  }
  if (overflow) {
    containerStyles.push({overflow: 'hidden'});
  }
  if (widthCard) {
    containerStyles.push({width: widthCard});
  }
  if (topMargin) {
    containerStyles.push({marginTop: topMargin});
  }
  if (bottomMargin) {
    containerStyles.push({marginBottom: bottomMargin});
  }
  if (heightCard) {
    containerStyles.push({height: heightCard});
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.hiddenRadius}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

card.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  onPress: PropTypes.func,
  widthCard: PropTypes.string,
  topMargin: PropTypes.number,
  bottomMargin: PropTypes.number,
  heightCard: PropTypes.number,
  overflow: PropTypes.bool,
  alignself: PropTypes.string,
  border: PropTypes.string,
};

export default card;
