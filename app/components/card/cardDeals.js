import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Card from "./card";
import Label from "./label";
import { Button } from "../button";
import { mainColor, color1, color2, color3, color } from "../../screens/styles";

const cardDeals = ({
  Nama,
  Alamat,
  onPress,
  label,
  onPressSeeDetail,
  onPressCancel
}) => {
  return (
    <View style={styles.bottomMargin}>
      <Card widthCard="95%">
        <View
          style={[
            styles.row100,
            styles.paddingHorizontal20,
            styles.paddingBottom10
          ]}
        >
          <Label
            label={label}
            color1={color1}
            color2={color2}
            color3={color3}
            color={color}
            colorFont="white"
            widthlabel={80}
          />
        </View>
        <TouchableOpacity onPress={onPress}>
          <View
            style={[
              styles.width100,
              styles.paddingHorizontal20,
              styles.paddingBottom10,
              styles.paddingTop40
            ]}
          >
            <Text style={styles.text16}>{Nama}</Text>
            <Text style={styles.text16}>{Alamat}</Text>
          </View>
          <View style={styles.styleRowButton}>
            <View style={[styles.width50, styles.paddingRight5]}>
              {/* <Button
                text="See Detail"
                buttonWidth="100%"
                buttonHeight={40}
                bold
                // buttonColor="#e6ca6b"
                buttonColor={mainColor}
                textColor="white"
                onPress={onPressSeeDetail}
              /> */}
            </View>
            <View style={[styles.width50, styles.paddingLeft5]}>
              {/* <Button
                text="Cancel"
                buttonWidth="100%"
                buttonHeight={40}
                bold
                // buttonColor="#e6ca6b"
                buttonColor={mainColor}
                textColor="white"
                onPress={onPressCancel}
              />  */}
              <Button
                text="See Detail"
                buttonWidth="90%"
                buttonHeight={40}
                bold
                // buttonColor="#e6ca6b"
                buttonColor={mainColor}
                textColor="white"
                onPress={onPressSeeDetail}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

cardDeals.propTypes = {
  Nama: PropTypes.string,
  Alamat: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
  onPressSeeDetail: PropTypes.func,
  onPressCancel: PropTypes.func
};

export default cardDeals;
