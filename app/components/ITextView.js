import React from "react";
import { StyleSheet, Text } from "react-native";
import { color } from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

function ITextView(props) {
  return <Text style={{ ...styles.text, ...props.style }}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: font.opensans_medium,
    fontSize: RFValue(15),
    color: Color.black,
  },
});
export default ITextView;
