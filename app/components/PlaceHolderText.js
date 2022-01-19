import React from "react";
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";
function PlaceHolderText(props) {
  return <Text style={styles.text}>{props.placeholder}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontFamily: font.opensans_medium,
    fontSize: RFValue(12),
    color: Color.placeHolderText,
    textAlign: "left",
    marginTop: RFValue(20),
    marginBottom: RFValue(5),
  },
});
export default PlaceHolderText;
